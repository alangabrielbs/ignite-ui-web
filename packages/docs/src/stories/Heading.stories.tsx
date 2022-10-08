import { Heading, HeadingProps } from "@ignite-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Typography/Heading",
  component: Heading,
  args: {
    children: "Mussum Ipsum, cacilds vidis litro abertis.",
  },
  argTypes: {
    as: {
      control: {
        type: "inline-radio",
      },
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
    },
    size: {
      control: {
        type: "select",
      },
      options: [
        "sm",
        "md",
        "lg",
        "2xl",
        "3xl",
        "4xl",
        "5xl",
        "6xl",
      ],
      defaultValue: "md",
    }
  },
} as Meta<HeadingProps>;

export const Default: StoryObj<HeadingProps> = {
  args: {
    as: "h2",
  },
};
