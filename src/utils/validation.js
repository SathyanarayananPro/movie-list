import { movies } from "../data/movieList";

function calculateSizeTree(obj, isRoot = false) {
  let total = 0;
  const result = {};

  if (Array.isArray(obj)) {
    obj.forEach((item) => {
      const { totalSize, tree } = calculateSizeTree(item);
      if (item.title) result[item.title] = tree;
      total += totalSize;
    });
  } else if (typeof obj === "object" && obj !== null) {
    if (obj.size) total += Number(obj.size);
    if (obj.submovies && obj.submovies.length > 0) {
      const { totalSize, tree } = calculateSizeTree(obj.submovies);
      total += totalSize;

      // only nest title once (skip re-wrapping same title)
      if (!isRoot && obj.title) {
        result[obj.title] = tree;
      } else {
        Object.assign(result, tree);
      }
    } else if (obj.title && obj.size) {
      result[obj.title] = Number(obj.size);
    }
  }

  return { totalSize: Number(total.toFixed(2)), tree: result };
}

const sizeSummary = {};
let overall = 0;

movies.submovies.forEach((movie) => {
  const { totalSize, tree } = calculateSizeTree(movie, true);
  sizeSummary[movie.title] = tree;
  overall += totalSize;
});

sizeSummary["Total Size"] = Number(overall.toFixed(2));

console.log(sizeSummary);
