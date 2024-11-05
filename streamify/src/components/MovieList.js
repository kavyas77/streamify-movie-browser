import React from 'react';

const MovieList = ({ movies }) => {
  if (movies.length === 0) {
    return <p>No movies to display</p>;  // Show message if no movies are found
  }

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.imdbID}>
          <img src={movie.Poster} alt={movie.Title} />
          <h2>{movie.Title}</h2>
          <p>{movie.Year}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieList;