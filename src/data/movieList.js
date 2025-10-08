import { movieSeriesCollection } from "./Movie Series/movieSeriesCollection";
import { kollywood } from "./kollywood";
import { hollywood } from "./hollywood";
import { webseriesCollections } from "./webseriesCollections";
const collectedMovies = [
  {
    id: "movieseries",
    title: "Movie Series",
    image: "/images/optimized/HeadCover/Movie Series.webp",
    submovies: [...movieSeriesCollection],
  },
  {
    id: "tamil",
    title: "Tamil Movies",
    image: "/images/optimized/HeadCover/Tamil.webp",
    submovies: [...kollywood],
  },
  {
    id: "english",
    title: "English Movies",
    image: "/images/optimized/HeadCover/English.webp",
    submovies: [...hollywood],
  },
  {
    id: "webseries",
    title: "Web Series",
    image: "/images/optimized/HeadCover/Web Series.webp",
    submovies: [...webseriesCollections],
  },
];
export const movies = {
  id: "allmovies",
  title: "All Movies",
  submovies: [...collectedMovies],
};
