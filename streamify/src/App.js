
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import { fetchMovies } from './services/api';
import './App.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);  // Holds the list of movies
  const [error, setError] = useState(null);   // Holds any error message

  const handleSearch = async (query) => {
    setError(null);  // Reset any previous errors
    setMovies([]);   // Clear the movie list before fetching new results
    try {
      const data = await fetchMovies(query);  // Fetch movies from the API
      if (data.Response === "False") {
        setError("Movie not found!");  // Show message if no movie is found
      } else {
        setMovies(data.Search || []);  // Set the movies if search results exist
      }
    } catch (err) {
      console.error("Error during fetch: ", err);
      setError("Failed to fetch movies. Please try again later.");  // Handle any API or network errors
    }
  };

  return (
    <div>
      <h1>Streamify - Movie Browser</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSearch={handleSearch} />
      {error && <p>{error}</p>}  {/* Display error message if there is one */}
      <MovieList movies={movies} />  {/* Display movie list or empty */}
    </div>
  );
};

export default App;