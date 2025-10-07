import { harrypotter } from "./harrypotter";
import { piratesofthecaribbean } from "./piratesofthecaribbean";
import { dc } from "./dc";
import { mcu } from "./mcu";

export const movieSeriesCollection = [
  {
    id: "mcu",
    title: "Marvel Cinematic Universe",
    image: "/images/Marvel/Front Cover/MCULogo4.png",
    submovies: [...mcu],
  },
  {
    id: "harrypotter",
    title: "Harry Potter",
    image: "/images/Harry Potter/Harry Potter Collection.jpeg",
    submovies: [...harrypotter],
  },
  {
    id: "piratesofthecaribbean",
    title: "Pirates of the Caribbean",
    image:
      "/images/Pirates of the Carebian/Enhanced/Pirates of the Caribbean Collection.jpg",
    submovies: [...piratesofthecaribbean],
  },
  // {
  //   id: "dc",
  //   title: "DC",
  //   image: "/images/DC/cover.png",
  //   submovies: [...dc],
  // },
];
