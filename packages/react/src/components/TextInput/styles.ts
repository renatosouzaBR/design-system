import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  borderRadius: 6,
  padding: '$3 $4',
  backgroundColor: '$gray900',
  border: '2px solid $gray900',
  boxSizing: 'border-box',

  display: 'flex',
  alignItems: 'baseline',

  '&:has(input:focus)': {
    borderColor: '$ignite500',
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
})

export const Prefix = styled('span', {
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$regular',
  color: '$gray400',
})

export const Input = styled('input', {
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$regular',
  color: '$white',

  flex: 1,
  backgroundColor: 'transparent',
  border: 0,
  outline: 0,

  '&::placeholder': {
    color: '$gray400',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },
})
