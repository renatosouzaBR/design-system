import * as Checkbox from '@radix-ui/react-checkbox'

import { styled, keyframes } from '../../styles'

export const CheckboxContainer = styled(Checkbox.Root, {
  all: 'unset',
  width: '$6',
  height: '$6',
  borderRadius: 4,
  backgroundColor: '$gray900',
  cursor: 'pointer',

  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '2px solid $gray900',
  lineHeight: 0,
  overflow: 'hidden',

  '&:focus, &[data-state="checked"]': {
    borderColor: '$ignite300',
  },

  '&[data-state="checked"]': {
    backgroundColor: '$ignite300',
  },
})

const slideIn = keyframes({
  from: {
    transform: 'translateY(-100%)',
  },
  to: {
    transform: 'translateY(0)',
  },
})

const slideOut = keyframes({
  from: {
    transform: 'translateY(0)',
  },
  to: {
    transform: 'translateY(-100%)',
  },
})

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  width: '$4',
  height: '$4',
  color: '$white',

  '&[data-state="checked"]': {
    animation: `${slideIn} 0.2s ease-out`,
  },

  '&[data-state="unchecked"]': {
    animation: `${slideOut} 0.2s ease-out`,
  },
})
