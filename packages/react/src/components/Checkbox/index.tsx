import { ComponentProps } from 'react'
import { Check } from 'phosphor-react'

import { CheckboxContainer, CheckboxIndicator } from './styles'

export interface CheckboxProps
  extends ComponentProps<typeof CheckboxIndicator> {}

export function Checkbox() {
  return (
    <CheckboxContainer>
      <CheckboxIndicator asChild>
        <Check />
      </CheckboxIndicator>
    </CheckboxContainer>
  )
}
