import { StoryObj, Meta } from '@storybook/react'
import { Tooltip, TooltipProps } from '@renatosouzabr-ui/react'

export default {
  title: 'Data display/Tooltip ',
  component: Tooltip,
  args: {
    text: '21 de Outubro - Indisponível',
  },
  argTypes: {
    text: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
