import { styled } from '../../styles'
import { Box } from '../Box'
import { Heading } from '../Heading'
import { Text } from '../Text'

export const ToastContainer = styled(Box, {
  width: 'fit-content',
  minWidth: '22.5rem',
  justifyContent: 'space-between',
})

export const TitleAndDescriptionArea = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',
})

export const ToastTitle = styled(Heading, {
  defaultVariants: {
    size: 'sm',
  },
})

export const ToastDescription = styled(Text, {
  color: '$gray400',

  defaultVariants: {
    size: 'sm',
  },
})

export const CloseButton = styled('button', {
  border: 0,
  backgroundColor: 'transparent',
  lineHeight: 0,
  cursor: 'pointer',

  width: '$5',
  height: '$5',

  svg: {
    color: '$gray200',
  },

  ':hover': {
    svg: {
      backgroundColor: '$gray100',
    },
  },
})
