import fs from "fs";
import path from "path";
import sharp from "sharp";

const imagesDir = "public/images"; // source folder
const optimizedDir = "public/images/optimized"; // destination folder
const dataDir = "src/data"; // movie data folder

const supportedFormats = [".jpg", ".jpeg", ".png"];

// Create optimized folder if missing
if (!fs.existsSync(optimizedDir))
  fs.mkdirSync(optimizedDir, { recursive: true });

// --- Optimize images ---
async function optimizeFolder(currentInput) {
  const entries = fs.readdirSync(currentInput, { withFileTypes: true });

  for (const entry of entries) {
    const inputPath = path.join(currentInput, entry.name);
    const relPath = path.relative(imagesDir, inputPath); // relative to main images folder
    const ext = path.extname(entry.name).toLowerCase();

    // Skip unsupported and already optimized
    if (!supportedFormats.includes(ext)) continue;

    // Build output path under optimized folder, preserving subfolders
    const outputPath = path
      .join(optimizedDir, relPath)
      .replace(/\.(jpg|jpeg|png)$/i, ".webp");
    const outputFolder = path.dirname(outputPath);
    if (!fs.existsSync(outputFolder))
      fs.mkdirSync(outputFolder, { recursive: true });

    try {
      await sharp(inputPath)
        .resize({ width: 1080 }) // optional
        .toFormat("webp", { quality: 75 })
        .toFile(outputPath);

      console.log(`✅ Optimized: ${relPath}`);
    } catch (err) {
      console.error(`❌ Failed: ${relPath}`, err.message);
    }
  }

  // Recurse into subfolders
  for (const entry of entries.filter((e) => e.isDirectory())) {
    await optimizeFolder(path.join(currentInput, entry.name));
  }
}

// --- Update movie data paths ---
function updateMovieDataPaths(folder) {
  const entries = fs.readdirSync(folder, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(folder, entry.name);

    if (entry.isDirectory()) {
      updateMovieDataPaths(fullPath);
    } else if (entry.isFile() && /\.(js|json)$/i.test(entry.name)) {
      let content = fs.readFileSync(fullPath, "utf-8");

      const updatedContent = content.replace(
        /image:\s*["']\/images\/(.*?)\.(jpg|jpeg|png)["']/gi,
        (match, p1) => `image: "/images/optimized/${p1}.webp"`
      );

      fs.writeFileSync(fullPath, updatedContent, "utf-8");
      console.log(`📄 Updated file: ${path.relative(".", fullPath)}`);
    }
  }
}

// --- Run ---
async function run() {
  console.log("🚀 Starting image optimization...");
  await optimizeFolder(imagesDir);
  console.log("✅ Image optimization complete!\n");

  console.log("🚀 Updating movie data paths...");
  updateMovieDataPaths(dataDir);
  console.log("✅ Movie data paths updated!\n");

  console.log("🎉 All done!");
}

run();
