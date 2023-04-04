import type { Meta, StoryObj } from "@storybook/react";
import { ConButton } from "./ConButton";
import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { ConProvider } from "../lib/context";

const meta: Meta<typeof ConButton> = {
  component: ConButton,
};

export default meta;
type Story = StoryObj<typeof ConButton>;

export const Primary: Story = {
  render: () => {
    return (
      <ConProvider>
        <ConButton></ConButton>
      </ConProvider>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("world")).toBeTruthy();
  },
};

export const ChangeState: Story = {
  render: () => {
    return (
      <ConProvider initState={{ hello: "world!!!" }}>
        <ConButton></ConButton>
      </ConProvider>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("world!!!")).toBeTruthy();
  },
};
