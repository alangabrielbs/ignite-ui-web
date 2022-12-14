import { Text, TextProps } from "@ignite-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Typography/Text",
  component: Text,
  args: {
    children: "Mussum Ipsum, cacilds vidis litro abertis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris.Paisis, filhis, espiritis santis.Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. A ordem dos tratores não altera o pão duris.",
  },
  argTypes: {
    size: {
      control: {
        type: "select",
      },
      options: [
        "xxs",
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
        "2xl",
        "4xl",
        "5xl",
        "6xl",
        "7xl",
        "8xl",
        "9xl",
      ],
      defaultValue: "md",
    }
  }
} as Meta;

export const Paragraph: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: "strong",
  }
};
