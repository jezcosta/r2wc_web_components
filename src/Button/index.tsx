import React, { MouseEventHandler } from 'react'
import { StyledButton } from './styles'

export interface ButtonProps {
  label?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}

const Button: React.FC<ButtonProps> = ({ label, onClick, ...props }) => {
  return (
    <StyledButton type="button" onClick={onClick} {...props}>
      {label}
    </StyledButton>
  )
}

export default Button
