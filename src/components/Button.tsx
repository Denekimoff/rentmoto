import React from 'react'
import { ButtonType } from '../types/types'

export const Button: React.FC<ButtonType> = ({ text, onClick, ...props }) => (
  <button onClick={onClick} {...props} className="button">
    {text}
  </button>
)
