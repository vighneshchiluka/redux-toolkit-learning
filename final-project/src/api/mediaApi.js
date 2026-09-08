import axios from "axios";

// Get API keys from .env file
const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY;
const GIPHY_KEY = import.meta.env.VITE_GIPHY_KEY;


// ==================== UNSPLASH ====================

export async function fetchPhotos(query, page = 1, per_page = 20) {

  // Send request to Unsplash
  const response = await axios.get(
    "https://api.unsplash.com/search/photos",
    {
      // Search query + pagination
      params: { query, page, per_page },

      // Send Unsplash API key
      headers: {
        Authorization: `Client-ID ${UNSPLASH_KEY}`
      },
    }
  );

  // Return API response
  return response.data;
}


// ==================== PEXELS ====================

export async function fetchVideos(query, page = 1, per_page = 15) {

  // Send request to Pexels
  const response = await axios.get(
    "https://api.pexels.com/v1/videos/search",
    {
      // Search query + pagination
      params: { query, page, per_page },

      // Send Pexels API key
      headers: {
        Authorization: PEXELS_KEY
      },
    }
  );

  // Return API response
  return response.data;
}


// ==================== GIPHY ====================

export async function fetchGIPHY(query, page = 1, per_page = 15) {

  // GIPHY uses offset instead of page
  const offset = (page - 1) * per_page;

  // Send request to GIPHY
  const response = await axios.get(
    "https://api.giphy.com/v1/gifs/search",
    {
      // Send search and pagination parameters
      params: {
        api_key: GIPHY_KEY,
        q: query,
        limit: per_page,
        offset: offset
      }
    }
  );

  // Return API response
  return response.data;
}