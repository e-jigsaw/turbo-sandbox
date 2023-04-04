import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByText("Boop"));
    await expect(canvas.getByText("Poop")).toBeTruthy();
  },
};
