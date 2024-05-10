// Desc: API call to get popular games from OpenCritic

// Import required libraries
import axios from 'axios';
import dotenv from 'dotenv';

// Load environment variables from .env
dotenv.config();

const options = {
  method: 'GET',
  url: 'https://opencritic-api.p.rapidapi.com/game',
  params: {
    sort: 'score',
    skip: '4',
  },
  headers: {
    // Add your RapidAPI key and host to the headers
    //! (please refer to https://rapidapi.com/opencritic-opencritic-default/api/opencritic-api/pricing to grab an API key)
    'X-RapidAPI-Key': process.env.RAPID_API_KEY,
    'X-RapidAPI-Host': 'opencritic-api.p.rapidapi.com',
  },
};

// Define a function to get popular games (static - never chaning data )
const getPopularGames = async () => {
  try {
    const response = await axios.request(options);
    return response.data; // Return the data retrieved from the API
  } catch (error) {
    console.error(error);
  }
};

export default getPopularGames;
