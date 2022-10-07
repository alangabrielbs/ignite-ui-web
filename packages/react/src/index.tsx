import { ComponentProps } from 'react'

import { styled } from './styles'

export const Button = styled('button', {
  color: '$white',
  backgroundColor: '$ignite300',
  borderRadius: '$md',
  fontSize: '$md',
  fontFamily: '$default',
  border: 0,
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',

  '&:hover': {
    backgroundColor: '$ignite500',
  },

  variants: {
    size: {
      small: {
        fontSize: '$sm',
        padding: '$2 $4',
      },
      big: {
        fontSize: '$lg',
        padding: '$4 $8',
      },
    },
  },

  defaultVariants: {
    size: 'small',
  },
})

export type ButtonProps = ComponentProps<typeof Button>
