const { default: axios } = require("axios");

const URL = "https://ipinfo.io";
const IPINFO_API_KEY = process.env.IPINFO_API_KEY;

// middleware for fetching user country
async function getUserCountry(IP) {
  try {
    const { data } = await axios.get(
      `${URL}/${IP}/json?token=${IPINFO_API_KEY}`
    );
    return data.country;
  } catch (error) {
    console.error("Error fetching country from IP:", error);
    return null;
  }
}

module.exports = getUserCountry;
