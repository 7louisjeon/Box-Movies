import React from 'react'
import './Card.css'
import { useHistory } from 'react-router-dom'

function Card({ src, title, description, price }) {
  const history = useHistory();
  return (
      <div className='card' onClick={() => history.push('./search')}>
        <img src={src} alt='' />
        <div className='card__info'>
          <h2>{title}</h2>
          <h4>{description}</h4>
          <h3>{price}</h3>
        </div>
      </div>
  );
}

export default Card
