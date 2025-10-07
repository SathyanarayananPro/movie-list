import { useLocation } from "react-router-dom";
import Darkmode from "./Darkmode";
function MovieDetails({ movie }) {
  const { pathname } = useLocation();
  const name = pathname.split("/").filter(Boolean).pop();

  if (!movie) return <h1>Movie not found</h1>;

  return (
    <div className="wrapper">
      <div className="cover-container">
        <div className="cover-poster">
          <div className="image-wrapper">
            <img src={movie.backgroundImage} alt={movie.title} />
            <span className="fade-left" />
            <span className="fade-right" />
          </div>
        </div>
        <img
          className="poster-moviedetail"
          src={movie.image}
          alt={movie.title}
        />
      </div>
      <div className="flex">
        <img
          className="logo"
          src={
            movie.resolution === "1080 P"
              ? "/images/1080p-full-hd.png"
              : "/images/4k.png"
          }
        />

        <h1 className="info">
          <img
            width="100"
            height="100"
            src="https://img.icons8.com/nolan/100/database.png"
            alt="database"
          />
          {movie.size} GB
        </h1>
        <h1 className="info">
          <img
            width="100"
            height="100"
            src="https://img.icons8.com/emoji/100/hourglass-not-done.png"
            alt="hourglass-not-done"
          />
          {movie.time}
        </h1>
        <h1 className="info">
          <img
            width="100"
            height="100"
            src="https://img.icons8.com/matisse/100/calendar.png"
            alt="calendar"
          />
          {movie.year}
        </h1>
      </div>
      <Darkmode />
    </div>
  );
}

export default MovieDetails;

{
  /* <div
      className={style.background}
      style={{ "--bg-url": `url(${movie.backgroundImage})` }}
    >
      <div className={style.overlay}></div>
      <div className={style.content}>
        <img alt={movie.title} src={movie.image} className={style.poster} />
      </div>
    </div> */
}
