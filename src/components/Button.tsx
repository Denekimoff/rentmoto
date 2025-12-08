import React from 'react'
import { ButtonType } from '../types/types'

export const Button: React.FC<ButtonType> = ({ text, onClick, ...props }) => (
  <button
    type="button"
    onClick={onClick}
    {...props}
    className="button"
    aria-label={text}
    tabIndex={0}
  >
    {text}
  </button>
)
