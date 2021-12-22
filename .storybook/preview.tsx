import React from "react";
import "../app/styles/global.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story: any) => (
    // Put here future global decorators for stories and tests relying on those stories
    <>
      <Story />
    </>
  ),
];
