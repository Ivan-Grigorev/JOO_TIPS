const axios = require("axios");

const URL = "https://ipinfo.io";
const IPINFO_API_KEY = process.env.IPINFO_API_KEY;

// Middleware function for fetching user's country based on their IP address
async function getCountryFromIP(IP) {
  try {
    const { data } = await axios.get(
      `${URL}/${IP}/json?token=${IPINFO_API_KEY}`
    );
    // Extract and return the user's country from the API response data
    return data.country;
  } catch (error) {
    console.error("Error fetching country from IP:", error);
    return null; // Return null if an error occurs
  }
}

// Export the getCountryFromIP function for use in other modules
module.exports = getCountryFromIP;
