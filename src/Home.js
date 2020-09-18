import React from 'react'
import Banner from './Banner'
import Card from './Card'
import './Home.css'

// ES7 snippets to do 'rfce'

function Home() {
  return (
    <div className='home'>
      <Banner />

      <div className='home__section'>
        <Card
          src='https://images.pexels.com/photos/2666598/pexels-photo-2666598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          title='Amazing night views'
          description='Night sky full of stars will have a special place in your heart forever.'
        />
        <Card
          src='https://images.pexels.com/photos/2516423/pexels-photo-2516423.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          title='Fresh air of the nature'
          description='Forget the stressful life in the big cities. Nothing can judge you in the mother nature.'
        />
        <Card
          src='https://images.pexels.com/photos/2376997/pexels-photo-2376997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          title='Event for your loved ones'
          description='Nightleaf helps plan events for your loved ones. Well decorated camping sites are worth thousands of flowers.'
        />
      </div>
      <div className='home__section'>
        <Card
          src='https://images.pexels.com/photos/176381/pexels-photo-176381.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          title='Riverside of Alps, Switzerland'
          description='Enjoy the pure nature of Switzerland with the possible option of fishing and hunting.'
          price='20$/night'
        />
        <Card
          src='https://images.pexels.com/photos/618848/pexels-photo-618848.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          title='Colle Santa Lucia, Italy'
          description='Have you ever slept on a huge feild? How about beside the world-ranked size rock?'
          price='70$/night'
        />
        <Card
          src='https://images.pexels.com/photos/587976/pexels-photo-587976.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          title='Durness, United Kingdom'
          description='Do you like camping cars? How about meeting new random people around the world?'
          price='180$/night'
        />
      </div>
    </div>
  );
}

export default Home
