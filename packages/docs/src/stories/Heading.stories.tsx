import { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@renatosouzaBR-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Heading text',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o Heading sempre é um `h2`. Para utilizar como um `h1` deve passar a props `as`.',
      },
    },
  },
}