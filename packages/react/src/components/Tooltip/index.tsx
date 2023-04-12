import { TooltipContainer, TooltipText, UpArrow } from './styles'

export interface TooltipProps {
  text: string
}

export function Tooltip() {
  return (
    <TooltipContainer>
      <TooltipText>21 de Outubro - Indisponível</TooltipText>
      <UpArrow />
    </TooltipContainer>
  )
}
