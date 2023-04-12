import { X } from 'phosphor-react'
import {
  CloseButton,
  TitleAndDescriptionArea,
  ToastContainer,
  ToastDescription,
  ToastTitle,
} from './styles'

export interface ToastProps {
  title: string
  description: string
  onClose: () => void
}

export function Toast({ title, description, onClose }: ToastProps) {
  return (
    <ToastContainer>
      <TitleAndDescriptionArea>
        <ToastTitle>{title}</ToastTitle>
        <ToastDescription>{description}</ToastDescription>
      </TitleAndDescriptionArea>

      <CloseButton onClick={onClose}>
        <X size={20} />
      </CloseButton>
    </ToastContainer>
  )
}
