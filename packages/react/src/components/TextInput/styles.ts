import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  borderRadius: 6,
  backgroundColor: '$gray900',
  border: '2px solid $gray900',
  boxSizing: 'border-box',

  display: 'flex',
  alignItems: 'center',

  '&:has(input:focus)': {
    borderColor: '$ignite500',
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  variants: {
    containerSize: {
      sm: {
        padding: '$2 $3',
      },
      md: {
        padding: '$3 $4',
      },
    },
  },

  defaultVariants: {
    containerSize: 'md',
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
