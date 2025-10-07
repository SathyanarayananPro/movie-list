import { useState } from "react";
import DcHeader from "./DcHeader";
import HarryPotterHeader from "./HarryPotterHeader";
import MarvelHeader from "./MarvelHeader";
import PiratesofthecaribbeanHeader from "./PiratesofthecaribbeanHeader";

function Header({ movies, setOrder, order }) {
  // Dynamic Header for Series
  const header = {
    mcu: <MarvelHeader />,
    harrypotter: <HarryPotterHeader />,
    piratesofthecaribbean: <PiratesofthecaribbeanHeader />,
    dc: <DcHeader />,
  };

  // Sorting handler
  const handleSort = (e) => {
    let sort;
    if (e.target.value === "year-desc") {
      sort = movies.submovies.toSorted((a, b) => {
        if (a.year.length > 4) {
          return b.year.split("-")[0] - a.year.split("-")[0];
        }
        return b.year - a.year;
      });
    } else if (e.target.value === "year-asc") {
      sort = movies.submovies.toSorted((a, b) => {
        if (a.year.length > 4) {
          return a.year.split("-")[0] - b.year.split("-")[0];
        }
        return a.year - b.year;
      });
    } else {
      sort = movies.submovies.toSorted((a, b) => {
        return a.id - b.id;
      });
    }
    setOrder(sort);
  };
  // Conditional Sorting menu view
  const hasSubmovies = order.some((el) => el.submovies);
  const hasYear = order.some((el) => el.year);
  const viewSort = (hasSubmovies && hasYear) || hasYear;

  return (
    <header className="sticky">
      {header[movies.id] || <div className="title header">{movies.title}</div>}

      {viewSort && (
        <select className="sort" onChange={handleSort} id="sort">
          <option value="default">Default</option>
          <option value="year-asc">Year (Old First)</option>
          <option value="year-desc">Year (New First)</option>
        </select>
      )}
    </header>
  );
}

export default Header;
