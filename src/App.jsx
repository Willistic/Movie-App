import React from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Footer from "./Footer";

const API_URL = "https://www.omdbapi.com?apikey=833a84b9";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const data = await fetch(`${API_URL}&s=${title}`);
    const response = await data.json();
    setMovies(response.Search);
  };

  useEffect(() => {
    searchMovies("batman");
  }, []);

  return (
    <div className="app">
      <h1>Movie App</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search a movie"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h1>No Movies Found</h1>
        </div>
      )}
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
