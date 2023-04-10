import { StoryObj, Meta } from '@storybook/react'
import { Text, Checkbox, CheckboxProps, Box } from '@renatosouzabr-ui/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {},
  decorators: [
    (StoryObj) => {
      return (
        <Box css={{ display: 'flex', gap: 8 }}>
          <StoryObj />
          <Text size="sm">Accept terms of user</Text>
        </Box>
      )
    },
  ],
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}
