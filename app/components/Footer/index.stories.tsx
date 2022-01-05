import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import Footer from ".";

export default {
  title: "Footer",
  component: Footer,
} as ComponentMeta<typeof Footer>;

export const Default: ComponentStoryObj<typeof Footer> = {
  args: {},
};
