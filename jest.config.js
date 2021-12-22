// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

const fromRoot = (d) => path.join(__dirname, d);

module.exports = {
  roots: [fromRoot("app")],
  resetMocks: true,
  collectCoverageFrom: [
    "**/app/**/*.{js,jsx,ts,tsx}",
    "!**/app/**/*stories.{js,jsx,ts,tsx}",
  ],
  coverageThreshold: null,
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "esbuild-jest",
    "^.+\\.jsx?$": "esbuild-jest",
  },
  moduleNameMapper: {
    // Handle CSS imports
    "^.+\\.css$": "<rootDir>/__mocks__/styleMock.js",
    // Handle image imports
    // https://jestjs.io/docs/webpack#handling-static-assets
    "^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$": `<rootDir>/__mocks__/fileMock.js`,
  },
  setupFilesAfterEnv: ["<rootDir>/app/setupTests.ts"],
};
