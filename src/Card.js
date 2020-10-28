import React from 'react'
import './Card.css'
import { useHistory } from 'react-router-dom'
import StarIcon from "@material-ui/icons/Star"

const IMG_API = "https://image.tmdb.org/t/p/w1280";

function Card({ title, poster_path, overview, vote_average }) {
  const history = useHistory();
  return (
      <div className='card' onClick={() => history.push('./search')}>
        <img src={
        poster_path
          ? IMG_API + poster_path
          : "https://img.pngio.com/popcorn-background-hd-png-transparent-9434-free-icons-and-png-popcorn-transparent-background-1181_1509.png"
      } alt={title} />
        <div className='card__info'>
          <div className="info__top">
            <h2>{title}</h2>
            <h4>{overview}</h4>
          </div>
          <div className="info__bottom">
            <StarIcon className='searchResult__star' style={{color: "wheat"}}/>
            <h3>{vote_average}</h3>
          </div>
        </div>
      </div>
  );
}

export default Card
