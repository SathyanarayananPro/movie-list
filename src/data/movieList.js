import { movieSeriesCollection } from "./Movie Series/movieSeriesCollection";
import { kollywood } from "./kollywood";
import { hollywood } from "./hollywood";
import { webseriesCollections } from "./webseriesCollections";
const collectedMovies = [
  {
    id: "movieseries",
    title: "Movie Series",
    image: "/images/HeadCover/Movie Series.jpg",
    submovies: [...movieSeriesCollection],
  },
  {
    id: "tamil",
    title: "Tamil Movies",
    image: "/images/HeadCover/Tamil.jpg",
    submovies: [...kollywood],
  },
  {
    id: "english",
    title: "English Movies",
    image: "/images/HeadCover/English.jpg",
    submovies: [...hollywood],
  },
  {
    id: "webseries",
    title: "Web Series",
    image: "/images/HeadCover/Web Series.jpg",
    submovies: [...webseriesCollections],
  },
];
export const movies = {
  id: "allmovies",
  title: "All Movies",
  submovies: [...collectedMovies],
};
