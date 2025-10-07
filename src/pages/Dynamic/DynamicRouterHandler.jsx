import { useLocation } from "react-router-dom";
import MovieDetails from "../MovieDetails";
import Home from "../Home";
import { movies } from "../../data/movieList";
import { currentCategory } from "../../utils/currentCategory";

function DynamicRouterHandler() {
  // Router paths are collected in array format
  const { pathname } = useLocation();
  const pathIds = pathname.split("/").filter(Boolean);

  //  This function is used to find current Category Movies
  const result = currentCategory(movies, pathIds);

  // If no movie is found return "Not Found"
  if (!result) return <h2>Not Found</h2>;

  // If no Sub-Movies are found, go to MovieDetail Component
  if (!result.submovies) {
    return <MovieDetails movie={result} />;
  }
  // If Sub-Movies are found, go to Home Component
  return <Home movies={result} pathIds={pathIds} />;
}

export default DynamicRouterHandler;
