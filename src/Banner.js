import { Button } from "@material-ui/core";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Banner.css";

function Banner({ setPrevSearchTerm }) {
  const history = useHistory();

  const handleOnClick = () => {
    history.push("/search");
  };

  return (
    <div className="banner">
      <div className="banner__search">
        <Button
          onClick={handleOnClick}
          className="banner__searchButton"
          variant="outlined"
        >
          "Search Movies"
        </Button>
      </div>
      <div className="banner__info">
        <div className="banner__info__texts">
          <h1>Best Movie Searching Site Ever Existed.</h1>
          <h5>
            Search any movies to find information <br />
            about genre, story, rating, published year
          </h5>
        </div>
        <Button onClick={handleOnClick} variant="outlined">
          Explore Movies
        </Button>
      </div>
    </div>
  );
}

export default Banner;
