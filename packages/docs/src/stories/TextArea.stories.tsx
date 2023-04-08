import { StoryObj, Meta } from '@storybook/react'
import { Text, TextArea, TextAreaProps, Box } from '@renatosouzaBR-ui/react'

export default {
  title: 'Form/Text Area',
  component: TextArea,
  args: {
    disabled: false,
  },
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
  decorators: [
    (StoryObj) => {
      return (
        <Box
          as="label"
          css={{
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
          }}
        >
          <Text size="sm">Observations</Text>
          <StoryObj />
        </Box>
      )
    },
  ],
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Type your observations',
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}
