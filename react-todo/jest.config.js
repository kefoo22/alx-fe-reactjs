export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest", // Use babel-jest for JSX
  },
  moduleFileExtensions: ["js", "jsx"],
};
