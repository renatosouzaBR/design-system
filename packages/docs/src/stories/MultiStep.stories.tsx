import { StoryObj, Meta } from '@storybook/react'
import { MultiStep, MultiStepProps, Box } from '@renatosouzabr-ui/react'

export default {
  title: 'Form/MultiStep',
  component: MultiStep,
  args: {
    size: 4,
    currentStep: 1,
  },
  decorators: [
    (StoryObj) => {
      return (
        <Box css={{ display: 'flex', flexDirection: 'column' }}>
          <StoryObj />
        </Box>
      )
    },
  ],
} as Meta<MultiStepProps>

export const Primary: StoryObj<MultiStepProps> = {}

export const Full: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4,
  },
}
