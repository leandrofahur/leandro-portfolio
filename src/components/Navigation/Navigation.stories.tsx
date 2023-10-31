// Story: Navigation
// eslint-disable-next-line storybook/story-exports
import { Meta, StoryObj } from "@storybook/react";
import { Navigation } from "./Navigation";
import "../../index.scss";

const meta = {
  component: Navigation,
  title: "components/Navigation",
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof Navigation>;

export const Default = {
  args: {},
} satisfies Story;
