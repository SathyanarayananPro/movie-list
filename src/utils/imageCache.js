const imageCache = {};

export function preloadImage(id, url) {
  if (!imageCache[id]) {
    const img = new Image();
    img.src = url;
    imageCache[id] = img;
  }
}
