import { ComponentProps, ElementType } from 'react'

import { styled } from '../styles'

export const Box = styled('div', {
  borderRadius: 6,
  padding: '$6',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',

  display: 'flex',
  justifyContent: 'center',
  gap: '$4',
})

export interface BoxProps extends ComponentProps<typeof Box> {
  as?: ElementType
}

Box.displayName = 'Box'
