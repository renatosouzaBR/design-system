import * as Avatar from '@radix-ui/react-avatar'

import { styled } from '../../styles'

export const AvatarContainer = styled(Avatar.Root, {
  width: '$16',
  height: '$16',
  borderRadius: '$full',
  overflow: 'hidden',
  display: 'inline-block',
})

export const AvatarImage = styled(Avatar.Image, {
  width: '$16',
  height: '$16',
  borderRadius: 'inherit',
})

export const AvatarFallback = styled(Avatar.Fallback, {
  width: '100%',
  height: '100%',
  borderRadius: 'inherit',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$gray500',
  color: '$gray100',

  svg: {
    width: '$6',
    height: '$6',
  },
})
