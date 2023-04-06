import { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@renatosouzaBR-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/renatosouzaBR.png',
    alt: 'Image do avatar',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const Fallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
