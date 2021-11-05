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
  setupFilesAfterEnv: ["<rootDir>/app/setupTests.ts"],
};
