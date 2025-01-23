import logo from "./logo.svg";
import { useState, useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com/?apikey=cfce07db";

const movie1 = [
  {
    Title: "Italian Spiderman",
    Year: "2007",
    imdbID: "tt2705436",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWNiMmNlNmQtZTI2MS00MzAxLTgxM2QtNDY3ZGQxNDMwZDgzXkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    Title: "Superman, Spiderman or Batman",
    Year: "2011",
    imdbID: "tt2084949",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg",
  },
  {
    Title: "Spiderman",
    Year: "1990",
    imdbID: "tt0100669",
    Type: "movie",
    Poster: "N/A",
  },
  {
    Title: "The Amazing Spiderman 2 Webb Cut",
    Year: "2021",
    imdbID: "tt18351128",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzI0MmQyMzYtZDAzNi00ZWZiLWFjMTgtNzQwOTRjYTFlM2Y3XkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    Title: "Spiderman the Verse",
    Year: "2019–",
    imdbID: "tt12122034",
    Type: "series",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBjNWY3OWYtMjk2ZS00NjA2LWE0NzAtOWQxNzBhNjZlMGYyXkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    Title: "Spiderman",
    Year: "2010",
    imdbID: "tt1785572",
    Type: "movie",
    Poster: "N/A",
  },
  {
    Title: "Spiderman in Cannes",
    Year: "2016",
    imdbID: "tt5978586",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZjc4MDYyMWQtNjM5MS00NzQxLTg5MTktMjI1MTVmNDNmNTA4XkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    Title: "Spiderman and Grandma",
    Year: "2009",
    imdbID: "tt1433184",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjE3Mzg0MjAxMl5BMl5BanBnXkFtZTcwNjIyODg5Mg@@._V1_SX300.jpg",
  },
  {
    Title: "Fighting, Flying and Driving: The Stunts of Spiderman 3",
    Year: "2007",
    imdbID: "tt1132238",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNTI3NDE1ZmEtMTRiMS00YTY4LTk0OGItNjY4YmI0MDM4OGM4XkEyXkFqcGdeQXVyODE2NDgwMzM@._V1_SX300.jpg",
  },
  {
    Title: "Discount Spiderman 2",
    Year: "2018",
    imdbID: "tt9146610",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BY2U4NjY2YTQtZDFiYS00YTk2LTk5NDItMWVlNmIwZjYyZmE5XkEyXkFqcGc@._V1_SX300.jpg",
  },
];

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const serachMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);

    const data = await response.json();
    setMovies(data.Search);
    console.log(data.Search);
  };

  useEffect(() => {
    serachMovies("Spiderman");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <img
          src={SearchIcon}
          alt="Search"
          onClick={() => {
            serachMovies(searchTerm);
          }}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
