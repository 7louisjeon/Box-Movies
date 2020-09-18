import { Button } from '@material-ui/core';
import React from 'react'
import SearchResult from './SearchResult'
import './SearchPage.css'

function SearchPage() {
  return (
    <div className='searchPage'>
      <div className='searchPage__info'>
        <p>82 stays · 30 september to 14 october · 1 guest</p>
        <h1>Stays around the world</h1>
        <Button variant='outlined'>Cancellation Flexibility</Button>
        <Button variant='outlined'>Type of place</Button>
        <Button variant='outlined'>Price</Button>
        <Button variant='outlined'>Rooms and beds</Button>
        <Button variant='outlined'>More filters</Button>
      </div>
      <SearchResult
        img='https://images.pexels.com/photos/14287/pexels-photo-14287.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        location='Alps, Switzerland'
        title='Camp on the top of the mountain'
        description='2 guests ・ 1 tent'
        star={4.87}
        price='67$ / night'
        total='840$'
      />
      <SearchResult
        img='https://images.pexels.com/photos/2612228/pexels-photo-2612228.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        location='Denver, USA'
        title='Quiet place'
        description='2 guests ・ 1 tent'
        star={4.66}
        price='38$ / night'
        total='560$'
      />
      <SearchResult
        img='https://images.pexels.com/photos/730426/pexels-photo-730426.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        location='Sangi Mountain, Thailand'
        title='Tropical Mountain'
        description='2 guests ・ 1 tent'
        star={4.58}
        price='22$ / night'
        total='280$'
      />
      <SearchResult
        img='https://images.pexels.com/photos/3232542/pexels-photo-3232542.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        location='Paragon Mountain, Peru'
        title='Over the clouds'
        description='4 guests ・ 1 tent'
        star={4.77}
        price='84$ / night'
        total='1120$'
      />
      <SearchResult
        img='https://images.pexels.com/photos/2975445/pexels-photo-2975445.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        location='Dusseldorf, Germany'
        title='Nature near the costal village'
        description='4 guests ・ 1 tent'
        star={4.92}
        price='31$ / night'
        total='420$'
      />
    </div>
  );

}

export default SearchPage
