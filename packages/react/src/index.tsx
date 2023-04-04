import { ComponentProps } from 'react'

import { styled } from './styles/index'

export const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite300',
  border: 0,
  borderRadius: '$sm',
  padding: '$2 $6',
  color: '$white',
  cursor: 'pointer',

  variants: {
    size: {
      small: {
        fontSize: 14,
        padding: '$2 $4',
      },
      big: {
        fontSize: 18,
        padding: '$3 $6',
      },
    },
  },
})

export type ButtonProps = ComponentProps<typeof Button>
