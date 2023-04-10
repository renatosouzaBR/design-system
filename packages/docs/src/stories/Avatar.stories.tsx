import { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@renatosouzabr-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/renatosouzaBR.png',
    alt: 'Image do avatar',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const Fallback: StoryObj<AvatarProps> = {
  args: {
    src: '',
  },
}
