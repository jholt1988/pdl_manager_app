module.exports = {
    transform: {
      "^.+\\.[t|j]sx?$": "babel-jest", // Use babel-jest to transpile test files
    },
    moduleNameMapper: {
      "\\.(css|less|scss|sass)$": "identity-obj-proxy", // Handle CSS imports
    },
    setupFilesAfterEnv: ['@testing-library/jest-dom'], 
    testEnvironment: "jsdom", // Ensures tests run in a DOM-like environment
  };
  