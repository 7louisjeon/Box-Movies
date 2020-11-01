import React, { useEffect, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./Header.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function Header({ setMovies, setPrevSearchTerm }) {
  const history = useHistory();
  const [searchTerm, setSearchTerm] = useState("");

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      getMovies(SEARCH_API + searchTerm);
      setPrevSearchTerm(searchTerm);
      setSearchTerm("");
    } else {
      getMovies(FEATURED_API);
      setPrevSearchTerm("Box Office Top Movies");
      setSearchTerm("");
    }

    history.push("/search");
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <h1 className="header__icon">
          <br />
          <br />
          Boxmovies
        </h1>
      </Link>
      <div className="header__center">
        <form onSubmit={handleOnSubmit}>
          <input
            type="text"
            style={{
              backgroundColor: "transparent",
              color: "var(--clr-main2)",
              border: "none",
              fontSize: "20px",
            }}
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
        <SearchIcon style={{ cursor: "pointer" }} onClick={handleOnSubmit} />
      </div>

      <div className="header__right"></div>
    </div>
  );
}

export default Header;
