import { StoryObj, Meta } from '@storybook/react'
import { Text, TextInput, TextInputProps, Box } from '@renatosouzabr-ui/react'

export default {
  title: 'Form/Text Input',
  component: TextInput,
  args: {
    disabled: false,
  },
  argTypes: {
    disabled: {
      control: 'boolean',
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
          <Text size="sm">Email address</Text>
          <StoryObj />
        </Box>
      )
    },
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your name',
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'github.com/',
    placeholder: 'your username',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your name',
    disabled: true,
  },
}
