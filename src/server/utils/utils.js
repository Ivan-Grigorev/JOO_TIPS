const getMacAddress = require("getmacaddress");
require("colors");

async function getUserMac() {
  try {
    const macAddress = await getMacAddress();
    return macAddress;
  } catch (error) {
    console.error(`Error getting MAC address: ${error}`.red);
    return null;
  }
}

module.exports = {
  getUserMac,
};
