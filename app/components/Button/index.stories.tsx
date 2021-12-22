import React from "react";
import { ComponentMeta } from "@storybook/react";
import Button from ".";
import { userEvent, within } from "@storybook/testing-library";
import { action } from "@storybook/addon-actions";

export default {
  title: "Button",
  component: Button,
  decorators: [(story) => <div className="p-4">{story()}</div>],
} as ComponentMeta<typeof Button>;

export const Default = {
  args: {
    content: "Mes références",
    onClick: action("Clicked !"),
  },
};

export const Clicked = {
  args: { ...Default.args },
  play: async ({ canvasElement }: any) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByText("Mes références"));
  },
};

export const Primary = {
  args: {
    ...Default.args,
    mode: "primary",
  },
};

export const Light = {
  args: {
    ...Default.args,
    mode: "light",
  },
};

export const Big = {
  args: {
    ...Default.args,
    mode: "primary",
    size: "big",
  },
};
