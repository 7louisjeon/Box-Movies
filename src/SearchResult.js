import React from 'react'
import './SearchResult.css'
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import StarIcon from "@material-ui/icons/Star"

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

export default function SearchResult({ title, poster_path, overview, vote_average, release_date }) {
  return (
    <div className='searchResult'>
      <img src={
        poster_path
          ? IMG_API + poster_path
          : "https://img.pngio.com/popcorn-background-hd-png-transparent-9434-free-icons-and-png-popcorn-transparent-background-1181_1509.png"
      } alt="No image available"/>
      <FavoriteBorderIcon className='searchResult__heart'/>

      <div className="searchResult__info">
        <div className="searchResult__infoTop">
          <p>{release_date}</p>
          <h3>{title}</h3>
          <p>____</p>
          <p className="overview">{overview}</p>
        </div>

        <div className="searchResult__infoBottom">
          <div className="searchResult__stars">
            <StarIcon className='searchResult__star' style={{color: `${setVoteClass(vote_average)}`}}/>
            <p>
              <strong>{vote_average}</strong>
            </p>
          </div>
          <div className="searchResults__price">
            <h2>Available</h2>
            <p>Total:</p>
          </div>
        </div>
      </div>
    </div>
  )
}
