import React from 'react'
import { ButtonType } from '../types/types'

export default function Button({ text }: ButtonType) {
  return <button className="button">{text}</button>
}
