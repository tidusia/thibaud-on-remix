import "@testing-library/jest-dom";
import "jest-axe/extend-expect";
import { setGlobalConfig } from "@storybook/testing-react";
import { parameters, decorators } from "../.storybook/preview"; // path of your preview.js file
import { format } from "util";

// Apply all global decorators to any tested story
// https://github.com/storybookjs/testing-react#global-config
setGlobalConfig({ parameters, decorators });

// Mark all console.errors as failing tests
const error = global.console.error;
global.console.error = function (...args) {
  error(...args);
  throw new Error(format(...args));
};

// Up the timeout limit per test for CI
jest.setTimeout(10000);
