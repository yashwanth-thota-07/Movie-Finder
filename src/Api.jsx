import React, { useState } from 'react';
import './Api.css';

const Api = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [searched, setSearched] = useState(false);

  const fetchData = async () => {
    setSearched(true);
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=77df4299&s=${search}`
    );

    const result = await res.json();

    console.log(result);
    setData(result.Search || []);
  };

  return (
    <div className="container">
      {!searched && <div className="hero-background"></div>}
      <h1 className="title">MovieFinder</h1>

      <p className="subtitle">
        Find your next favorite movie in seconds.
      </p>

      <div className="search-box">
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Movies"
        />

        <button onClick={fetchData}>
          Search
        </button>
      </div>

      <div className="movies">
        {data.map((movie) => {
          console.log(movie);

          return (
            <div key={movie.imdbID} className="card">
              <img
                src={movie.Poster}
                alt={movie.Title}
              />

              <div className="card-content">
                <h2>{movie.Title}</h2>

                <h3>{movie.Year}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Api;