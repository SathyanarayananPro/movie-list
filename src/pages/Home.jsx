import { Link, useLocation } from "react-router-dom";
import dynamicNameIcon from "./Dynamic/useDynamicNameIcon";
import Darkmode from "./Darkmode";
import Header from "./header/Header";
import { preloadImage } from "../utils/imageCache";
import { useEffect, useState } from "react";

function Home({ movies, pathIds }) {
  // Dynamic Icon Function
  dynamicNameIcon();
  const [order, setOrder] = useState(movies.submovies);
  const { pathname } = useLocation();
  // when ever there is change in path then order will re-render
  useEffect(() => {
    setOrder(movies.submovies);
  }, [pathname]);

  // useEffect(() => {
  //   order?.forEach((list) => preloadImage(list.id, list.image));
  // }, [order]);
  return (
    <div className="wrapper">
      <Header movies={movies} setOrder={setOrder} order={order} />
      <div className="grid">
        {order?.map((list) => {
          preloadImage(list.id, list.image);
          const content = (
            <div className="poster-container">
              <img
                className={`poster`}
                src={list.image}
                alt={list.title}
                loading="lazy"
              />
              {list.resolution !== undefined && (
                <div className="ribbon">
                  {list.resolution === "1080 P"
                    ? "FHD"
                    : list.resolution === "720 P"
                    ? "HD"
                    : `${list.resolution}`}
                </div>
              )}
              {list.year && <span className="year-badge">{list.year}</span>}
              <p className="text">{list.title}</p>
            </div>
          );
          return (
            <Link
              className="grid-link"
              to={`/${[...pathIds, list.id].join("/")}`}
              key={list.id}
            >
              {content}
            </Link>
          );
        })}
      </div>
      <Darkmode />
    </div>
  );
}

export default Home;
