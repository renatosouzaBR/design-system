import { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@renatosouzaBR-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet rem adipisci reiciendis. Rerum laudantium dolore corrupti blanditiis reiciendis iste nihil ipsam molestiae! Neque, commodi iure nobis nostrum error cumque enim!',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    as: 'strong',
  },
}
