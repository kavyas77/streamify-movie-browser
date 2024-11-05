import axios from 'axios';

const API_KEY = process.env.REACT_APP_OMDB_API_KEY;  // Load API key from .env

export const fetchMovies = async (query) => {
  try {
    const response = await axios.get('https://www.omdbapi.com/', {  // Use https instead of http for security
      params: {
        s: query,         // The search term, e.g., "The Dark Knight"
        type: 'movie',    // Type of content (movie)
        apikey: API_KEY,  // Your API key from .env
      },
    });
    
    return response.data;  // Return the response data (movie search results)
  } catch (error) {
    console.error('Error fetching data from OMDb API:', error);
    throw error;  // Throw the error to be caught by the calling function
  }
};