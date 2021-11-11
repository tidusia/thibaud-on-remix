import React from "react";
import * as stories from "./index.stories";
import { axe } from "jest-axe";
import userEvent from "@testing-library/user-event";
import { composeStories } from "@storybook/testing-react";
import { render, screen } from "@testing-library/react";

const { Default } = composeStories(stories);

describe("Button", () => {
  describe("Default", () => {
    test("should be accessible and match snapshot", async () => {
      const { container } = render(<Default />);
      expect(await axe(container)).toHaveNoViolations();
      expect(container.firstChild).toMatchSnapshot();
    });

    test("should handle click", () => {
      const onClick = jest.fn();
      render(<Default onClick={onClick} />);
      userEvent.click(screen.getByText("Mes références"));
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });
});
