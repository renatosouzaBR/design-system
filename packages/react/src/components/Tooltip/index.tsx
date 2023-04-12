import { TooltipContainer, TooltipText, UpArrow } from './styles'

export interface TooltipProps {
  text: string
}

export function Tooltip({ text }: TooltipProps) {
  return (
    <TooltipContainer>
      <TooltipText>{text}</TooltipText>
      <UpArrow />
    </TooltipContainer>
  )
}
