import { harrypotter } from "./harrypotter";
import { piratesofthecaribbean } from "./piratesofthecaribbean";
import { dc } from "./dc";
import { mcu } from "./mcu";

export const movieSeriesCollection = [
  {
    id: "mcu",
    title: "Marvel Cinematic Universe",
    image: "/images/optimized/Marvel/Front Cover/MCULogo4.webp",
    submovies: [...mcu],
  },
  {
    id: "harrypotter",
    title: "Harry Potter",
    image: "/images/optimized/Harry Potter/Harry Potter Collection.webp",
    submovies: [...harrypotter],
  },
  {
    id: "piratesofthecaribbean",
    title: "Pirates of the Caribbean",
    image: "/images/optimized/Pirates of the Carebian/Enhanced/Pirates of the Caribbean Collection.webp",
    submovies: [...piratesofthecaribbean],
  },
  // {
  //   id: "dc",
  //   title: "DC",
  //   image: "/images/optimized/DC/cover.webp",
  //   submovies: [...dc],
  // },
];
