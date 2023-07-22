function obfuscate(text) {
  const buffer = Buffer.from(text);
  return buffer.toString("base64");
}

export { obfuscate };
