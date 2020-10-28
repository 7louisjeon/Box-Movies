import { MuiThemeProvider } from '@material-ui/core';
import React, { useEffect } from 'react'
import { useState } from 'react';
import Banner from './Banner'
import Card from './Card'
import './Home.css'

const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

function Home( {movies, setPrevSearchTerm} ) {

  return (
    <div className='home'>
      <Banner setPrevSearchTerm={setPrevSearchTerm}/>

      <div className='home__section'>
      {movies.map((movie) => <Card
          key={movie.id} {...movie}
        />)}
      </div>
    </div>
  );
}

export default Home
