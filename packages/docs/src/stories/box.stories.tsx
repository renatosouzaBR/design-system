import { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps } from '@renatosouzaBR-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <span>Mostrando component Box</span>
      </>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}