import { styled } from '../../styles'

export const TooltipContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: 'red',
})

export const TooltipText = styled('div', {
  padding: '$3 $4',
  borderRadius: 5,
  backgroundColor: '$gray900',
  color: '$gray100',
  fontSize: '$sm',
  fontWeight: '$medium',
  lineHeight: '$short',
  maxWidth: '220rem',
})

export const UpArrow = styled('div', {
  borderLeft: '8px solid transparent',
  borderRight: '8px solid transparent',
  borderBottom: '8px solid transparent',
  borderTop: '8px solid $gray900',
  display: 'inline-block',
})
