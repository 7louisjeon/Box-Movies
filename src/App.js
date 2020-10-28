import React, { useEffect, useState } from 'react';
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import SearchPage from './SearchPage'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  const [movies, setMovies] = useState([]);
  const [prevSearchTerm, setPrevSearchTerm] = useState("");

  return (
    // BEM
    <div className='App'>
      <Router>
        <Header setMovies={setMovies} setPrevSearchTerm={setPrevSearchTerm} />

        <Switch>
          <Route path='/search'>
            <SearchPage movies={movies} setMovies={setMovies} prevSearchTerm={prevSearchTerm}/>
          </Route>
          <Route path='/'>
            <Home movies={movies} setPrevSearchTerm={setPrevSearchTerm}/>
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
