import { Box, BoxProps } from "@ignite-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Surfaces/Box",
  component: Box,
  args: {
    children: (
      <>
        <span>Mussum Ipsum, cacilds vidis litro abertis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris.Paisis, filhis, espiritis santis.Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.A ordem dos tratores não altera o pão duris.</span>
      </>
    )
  }
} as Meta;

export const Primary: StoryObj<BoxProps> = {};
