// Function to obfuscate (encode) the given text using base64 encoding
function obfuscate(text) {
  try {
    const buffer = Buffer.from(text); // Convert the text to a buffer
    return buffer.toString("base64"); // Convert the buffer to base64 encoded string
  } catch (error) {
    console.error(`Error while obfuscate: ${error}`);
  }
}

// Export the obfuscate function for use in other modules
module.exports = { obfuscate };
