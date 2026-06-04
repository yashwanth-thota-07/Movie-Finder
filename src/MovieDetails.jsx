import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const MovieDetails = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovie = async () => {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=77df4299&i=${id}`
      );

      const data = await res.json();
      setMovie(data);
    };

    getMovie();
  }, [id]);

  if (!movie) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="details-page">

  <img
    src={movie.Poster}
    alt={movie.Title}
  />

  <div>
    <h1>{movie.Title}</h1>

    <p><strong>Year:</strong> {movie.Year}</p>

    <p><strong>Genre:</strong> {movie.Genre}</p>

    <p><strong>Actors:</strong> {movie.Actors}</p>

    <p><strong>Director:</strong> {movie.Director}</p>

    <p><strong>IMDb Rating:</strong> {movie.imdbRating}</p>

    <p><strong>Plot:</strong> {movie.Plot}</p>
  </div>

</div>
  );
};

export default MovieDetails;
