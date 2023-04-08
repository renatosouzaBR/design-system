import { ComponentProps } from 'react'
import { styled } from '../styles'

export const TextArea = styled('textarea', {
  borderRadius: 6,
  padding: '$3 $4',
  backgroundColor: '$gray900',
  border: '2px solid $gray900',
  boxSizing: 'border-box',
  minWidth: 80,

  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$regular',
  color: '$white',

  resize: 'vertical',
  outline: 0,

  '&:focus': {
    borderColor: '$ignite500',
  },

  '&::placeholder': {
    color: '$gray400',
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
})

export interface TextAreaProps extends ComponentProps<typeof TextArea> {}

TextArea.displayName = 'TextArea'
