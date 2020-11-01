import React from "react";
import "./SearchResult.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const setVoteClass = (vote) => {
  if (vote > 8) {
    return "green";
  } else if (vote >= 6) {
    return "orange";
  } else {
    return "red";
  }
};

const genreNames = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  90: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Science Fiction",
  10770: "TV Movie",
  53: "Thriller",
  10752: "War",
  37: "Western",
};

export default function SearchResult({
  title,
  poster_path,
  overview,
  vote_average,
  release_date,
  original_language,
  genre_ids,
}) {
  const cut = () => {
    let string = "";
    if (genre_ids.length > 0) {
      for (let i = 0; i < genre_ids.length; i++) {
        string = string + genreNames[genre_ids[i]] + "/";
      }
    } else {
      return "Unknown";
    }
    return string.slice(0, -1);
  };
  return (
    <div className="searchResult">
      <img
        src={
          poster_path
            ? IMG_API + poster_path
            : "https://img.pngio.com/popcorn-background-hd-png-transparent-9434-free-icons-and-png-popcorn-transparent-background-1181_1509.png"
        }
        alt="No image available"
      />
      <FavoriteBorderIcon className="searchResult__heart" />

      <div className="searchResult__info">
        <div className="searchResult__infoTop">
          <p>{release_date}</p>
          <h3>{title}</h3>
          <p>____</p>
          <p className="overview">{overview}</p>
        </div>

        <div className="searchResult__infoBottom">
          <div className="searchResult__stars">
            <StarIcon
              className="searchResult__star"
              style={{ color: `${setVoteClass(vote_average)}` }}
            />
            <p>
              <strong>{vote_average}</strong>
            </p>
          </div>
          <div className="searchResult__extra">
            <h2>Genre: {cut()}</h2>
            <p>Language: {original_language.toUpperCase()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
