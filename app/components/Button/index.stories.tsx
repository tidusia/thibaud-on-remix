import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from ".";

export default {
  title: "Button",
  component: Button,
  decorators: [(story: any) => <div className="p-4">{story()}</div>],
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: "Mes références",
};

export const Primary = Template.bind({});
Primary.args = {
  ...Default.args,
  mode: "primary",
};

export const Light = Template.bind({});
Light.args = {
  ...Default.args,
  mode: "light",
};

export const Big = Template.bind({});
Big.args = {
  ...Default.args,
  mode: "primary",
  size: "big",
};
