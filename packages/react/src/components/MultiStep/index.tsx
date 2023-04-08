import { MultiStepContainer, MultiStepLabel, Step, Steps } from './styles'

export interface MultiStepProps {
  size: number
  currentStep: number
}

export function MultiStep({ size, currentStep }: MultiStepProps) {
  return (
    <MultiStepContainer>
      <MultiStepLabel>
        {currentStep} de {size}
      </MultiStepLabel>

      <Steps css={{ '--steps-size': size }}>
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => (
          <Step key={step} active={currentStep >= step} />
        ))}
      </Steps>
    </MultiStepContainer>
  )
}
