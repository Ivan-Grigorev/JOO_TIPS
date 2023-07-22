function obfuscate(text) {
  try {
    const buffer = Buffer.from(text);
    return buffer.toString("base64");
  } catch (error) {
    console.error(`Error while obfuscate: ${error}`);
  }
}

module.exports = { obfuscate };
