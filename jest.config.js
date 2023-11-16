module.exports = {
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  testEnvironment: "node",
  moduleNameMapper: {
    axios: "axios/dist/node/axios.cjs",
  },
  //   setupFilesAfterEnv: ["<rootDir>/test-setup.js"],
};
