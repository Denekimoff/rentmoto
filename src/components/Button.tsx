import React from 'react'
import { ButtonType } from '../types/types'

export const Button: React.FC<ButtonType> = ({ text, onClick, ...props }: ButtonType) => (
  <button onClick={onClick} {...props}>
    {text}
  </button>
)
