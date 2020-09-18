import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import './Banner.css'
import Search from './Search'

function Banner() {
  const history = useHistory();
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className='banner'>
      <div className='banner__search'>
        {showSearch && <Search />}
        <Button
          onClick={() => setShowSearch(!showSearch)}
          className='banner__searchButton'
          variant='outlined'
        >
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
      </div>
      <div className='banner__info'>
        <div className='banner__info__texts'>
          <h1>Want to camp this weekend?</h1>
          <h5>
            Nightleaf helps people book marvelous adventures <br />
            with natural camping sites around the world.
          </h5>
        </div>
        <Button onClick={() => history.push('/search')} variant='outlined'>Explore Nature</Button>
      </div>
    </div>
  );
}

export default Banner
