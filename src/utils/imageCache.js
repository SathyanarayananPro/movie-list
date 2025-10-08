const imageCache = {};

// Load cached images from sessionStorage on startup
const storedCache = sessionStorage.getItem("imageCache");
if (storedCache) {
  const urlMap = JSON.parse(storedCache);
  Object.entries(urlMap).forEach(([id, url]) => {
    const img = new Image();
    img.src = url;
    imageCache[id] = img;
  });
}

export function preloadImage(id, url) {
  if (!imageCache[id]) {
    const img = new Image();
    img.src = url;
    imageCache[id] = img;
    // Save to sessionStorage
    const urlMap = sessionStorage.getItem("imageCache")
      ? JSON.parse(sessionStorage.getItem("imageCache"))
      : {};
    urlMap[id] = url;
    sessionStorage.setItem("imageCache", JSON.stringify(urlMap));
  }
}
