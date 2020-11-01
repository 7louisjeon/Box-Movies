import React, { useEffect, useState } from "react";
import SearchResult from "./SearchResult";
import "./SearchPage.css";
import ReplayIcon from "@material-ui/icons/Replay";
import Choice from "./Choice";
import Filter from "./Filter";

const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function SearchPage({ movies, prevSearchTerm, setMovies }) {
  const [genre, setGenre] = useState("Genre");
  const [ageLimit, setAgeLimit] = useState("Age limit");
  const [year, setYear] = useState("Year");
  const [rating, setRating] = useState("Rating");
  const [originalLanguage, setOriginalLanguage] = useState("Original language");
  const [filterType, setFilterType] = useState();

  useEffect(() => {
    getFilteredMovies();
  }, [prevSearchTerm, genre, ageLimit, year, rating, originalLanguage]);

  const genreIDs = {
    Action: 28,
    Adventure: 12,
    Animation: 16,
    Comedy: 35,
    Crime: 80,
    Documentary: 90,
    Drama: 18,
    Family: 10751,
    Fantasy: 14,
    History: 36,
    Horror: 27,
    Music: 10402,
    Mystery: 9648,
    Romance: 10749,
    "Science Fiction": 878,
    "TV Movie": 10770,
    Thriller: 53,
    War: 10752,
    Western: 37,
  };

  const adult = { "Not 19+": false, "19+": true };

  const years = {
    "2020s": "202",
    "2010s": "201",
    "2000s": "200",
    "1990s": "199",
    "1980s": "198",
    "1970s": "197",
    "1960s": "196",
  };

  const vote = { "★10": 10, "★9.0+": 9, "★8.0+": 8, "★7.0+": 7, "★6.0+": 6 };

  const [filterDesc, setFilterDesc] = useState("");

  const movieFilter = (X) => {
    let dataCopy = [...X];
    let filterDescCopy = "";
    console.log(genre);
    if (genre !== "Genre") {
      dataCopy = dataCopy.filter((movie) => {
        return movie.genre_ids.includes(genreIDs[genre]);
      });
      filterDescCopy = ` with filter (${genre}`;
    }
    if (ageLimit !== "Age limit") {
      dataCopy = dataCopy.filter((movie) => {
        return movie.adult == adult[ageLimit];
      });
      if (filterDescCopy == "") {
        filterDescCopy = ` with filter (${ageLimit}`;
      } else {
        filterDescCopy = filterDescCopy + `, ${ageLimit}`;
      }
    }
    if (year !== "Year") {
      dataCopy = dataCopy.filter((movie) => {
        console.log(movie.release_date.slice(0, 3));
        return movie.release_date.slice(0, 3) == years[year];
      });
      if (filterDescCopy == "") {
        filterDescCopy = ` with filter (${year}`;
      } else {
        filterDescCopy = filterDescCopy + `, ${year}`;
      }
    }
    if (rating !== "Rating") {
      dataCopy = dataCopy.filter((movie) => {
        return movie.vote_average > vote[rating];
      });
      if (filterDescCopy == "") {
        filterDescCopy = ` with filter (${rating}`;
      } else {
        filterDescCopy = filterDescCopy + `, ${rating}`;
      }
    }
    if (originalLanguage !== "Original language") {
      dataCopy = dataCopy.filter((movie) => {
        return movie.original_language == originalLanguage.toLowerCase();
      });
      if (filterDescCopy == "") {
        filterDescCopy = ` with filter (${originalLanguage}`;
      } else {
        filterDescCopy = filterDescCopy + `, ${originalLanguage}`;
      }
    }
    if (filterDescCopy !== "") {
      filterDescCopy = filterDescCopy + ")";
    }
    setFilterDesc(filterDescCopy);
    return dataCopy;
  };

  const filterMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(movieFilter(data.results));
      });
  };

  const getFilteredMovies = () => {
    if (prevSearchTerm) {
      filterMovies(SEARCH_API + prevSearchTerm);
    } else {
      filterMovies(FEATURED_API);
    }
  };

  const reset = () => {
    setGenre("Genre");
    setAgeLimit("Age limit");
    setYear("Year");
    setRating("Rating");
    setOriginalLanguage("Original language");
  };

  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <h1>
          {!prevSearchTerm && movies.length > 0 && "Box Office Top Movies"}
          {prevSearchTerm &&
            movies.length > 0 &&
            `Showing result for '${prevSearchTerm}' ${filterDesc}`}
          {movies.length == 0 &&
            `No search result for '${prevSearchTerm}' ${filterDesc}`}
        </h1>
        <Filter
          name="genre"
          Name="Genre"
          value={genre}
          filterType={filterType}
          setFilterType={setFilterType}
        />
        {filterType == "genre" && (
          <div className="filter">
            <Choice
              setFilter={setGenre}
              filterType={genre}
              filterTypeString="Genre"
              choice="Action"
            />
            <Choice
              setFilter={setGenre}
              filterType={genre}
              filterTypeString="Genre"
              choice="Adventure"
            />
            <Choice
              setFilter={setGenre}
              filterType={genre}
              filterTypeString="Genre"
              choice="Animation"
            />
            <Choice
              setFilter={setGenre}
              filterType={genre}
              filterTypeString="Genre"
              choice="Comedy"
            />
            <Choice
              setFilter={setGenre}
              filterType={genre}
              filterTypeString="Genre"
              choice="Crime"
            />
            <Choice
              setFilter={setGenre}
              filterType={genre}
              filterTypeString="Genre"
              choice="Documentary"
            />
            <Choice
              setFilter={setGenre}
              filterType={genre}
              filterTypeString="Genre"
              choice="Drama"
            />
            <Choice
              setFilter={setGenre}
              filterType={genre}
              filterTypeString="Genre"
              choice="Family"
            />
            <Choice
              setFilter={setGenre}
              filterType={genre}
              filterTypeString="Genre"
              choice="Fantasy"
            />
            <Choice
              setFilter={setGenre}
              filterType={genre}
              filterTypeString="Genre"
              choice="History"
            />
            <Choice
              setFilter={setGenre}
              filterType={genre}
              filterTypeString="Genre"
              choice="Horror"
            />
            <Choice
              setFilter={setGenre}
              filterType={genre}
              filterTypeString="Genre"
              choice="Music"
            />
            <Choice
              setFilter={setGenre}
              filterType={genre}
              filterTypeString="Genre"
              choice="Mystery"
            />
            <Choice
              setFilter={setGenre}
              filterType={genre}
              filterTypeString="Genre"
              choice="Romance"
            />
            <Choice
              setFilter={setGenre}
              filterType={genre}
              filterTypeString="Genre"
              choice="Science Fiction"
            />
            <Choice
              setFilter={setGenre}
              filterType={genre}
              filterTypeString="Genre"
              choice="TV Movie"
            />
            <Choice
              setFilter={setGenre}
              filterType={genre}
              filterTypeString="Genre"
              choice="Thriller"
            />
            <Choice
              setFilter={setGenre}
              filterType={genre}
              filterTypeString="Genre"
              choice="War"
            />
            <Choice
              setFilter={setGenre}
              filterType={genre}
              filterTypeString="Genre"
              choice="Western"
            />
            <button
              className="reset"
              onClick={() => {
                setGenre("Genre");
              }}
            >
              <ReplayIcon style={{ cursor: "pointer" }} />
            </button>
          </div>
        )}
        <Filter
          name="age"
          Name="Age limit"
          value={ageLimit}
          filterType={filterType}
          setFilterType={setFilterType}
        />
        {filterType == "age" && (
          <div className="filter">
            <Choice
              setFilter={setAgeLimit}
              filterType={ageLimit}
              filterTypeString="Age limit"
              choice="Not 19+"
            />
            <Choice
              setFilter={setAgeLimit}
              filterType={ageLimit}
              filterTypeString="Age limit"
              choice="19+"
            />
            <button
              className="reset"
              onClick={() => {
                setAgeLimit("Age limit");
              }}
            >
              <ReplayIcon style={{ cursor: "pointer" }} />
            </button>
          </div>
        )}
        <Filter
          name="year"
          Name="Year"
          value={year}
          filterType={filterType}
          setFilterType={setFilterType}
        />
        {filterType == "year" && (
          <div className="filter">
            <Choice
              setFilter={setYear}
              filterType={year}
              filterTypeString="Year"
              choice="2020s"
            />
            <Choice
              setFilter={setYear}
              filterType={year}
              filterTypeString="Year"
              choice="2010s"
            />
            <Choice
              setFilter={setYear}
              filterType={year}
              filterTypeString="Year"
              choice="2000s"
            />
            <Choice
              setFilter={setYear}
              filterType={year}
              filterTypeString="Year"
              choice="1990s"
            />
            <Choice
              setFilter={setYear}
              filterType={year}
              filterTypeString="Year"
              choice="1980s"
            />
            <Choice
              setFilter={setYear}
              filterType={year}
              filterTypeString="Year"
              choice="1970s"
            />
            <Choice
              setFilter={setYear}
              filterType={year}
              filterTypeString="Year"
              choice="1960s"
            />
            <button
              className="reset"
              onClick={() => {
                setYear("Year");
              }}
              style={{ cursor: "pointer" }}
            >
              <ReplayIcon />
            </button>
          </div>
        )}
        <Filter
          name="rating"
          Name="Rating"
          value={rating}
          filterType={filterType}
          setFilterType={setFilterType}
        />
        {filterType == "rating" && (
          <div className="filter">
            <Choice
              setFilter={setRating}
              filterType={rating}
              filterTypeString="Rating"
              choice="★10"
            />
            <Choice
              setFilter={setRating}
              filterType={rating}
              filterTypeString="Rating"
              choice="★9.0+"
            />
            <Choice
              setFilter={setRating}
              filterType={rating}
              filterTypeString="Rating"
              choice="★8.0+"
            />
            <Choice
              setFilter={setRating}
              filterType={rating}
              filterTypeString="Rating"
              choice="★7.0+"
            />
            <Choice
              setFilter={setRating}
              filterType={rating}
              filterTypeString="Rating"
              choice="★6.0+"
            />
            <button
              className="reset"
              onClick={() => {
                setRating("Rating");
                getFilteredMovies();
              }}
            >
              <ReplayIcon style={{ cursor: "pointer" }} />
            </button>
          </div>
        )}
        <Filter
          name="original"
          Name="Original language"
          value={originalLanguage}
          filterType={filterType}
          setFilterType={setFilterType}
        />
        {filterType == "original" && (
          <div className="filter">
            <Choice
              setFilter={setOriginalLanguage}
              filterType={originalLanguage}
              filterTypeString="Original language"
              choice="EN"
            />
            <Choice
              setFilter={setOriginalLanguage}
              filterType={originalLanguage}
              filterTypeString="Original language"
              choice="FR"
            />
            <Choice
              setFilter={setOriginalLanguage}
              filterType={originalLanguage}
              filterTypeString="Original language"
              choice="ES"
            />
            <Choice
              setFilter={setOriginalLanguage}
              filterType={originalLanguage}
              filterTypeString="Original language"
              choice="PR"
            />
            <button
              className="reset"
              onClick={() => {
                setOriginalLanguage("Original language");
              }}
            >
              <ReplayIcon style={{ cursor: "pointer" }} />
            </button>
          </div>
        )}
        <button className="reset resetAll" onClick={reset}>
          <ReplayIcon />
        </button>
      </div>
      {movies &&
        movies.map((movie) => <SearchResult key={movie.id} {...movie} />)}
    </div>
  );
}
export default SearchPage;
