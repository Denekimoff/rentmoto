import React from 'react'
import { ButtonType } from '../types/ButtonType'
import '../styles/button.css'

export default function Button({ text }: ButtonType) {
  return <button className="button">{text}</button>
}
