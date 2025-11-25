import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from './Wrapper'

export default function Footer() {
  return (
    <footer className="footer">
      <Wrapper>
        <Link to="/">Home</Link> • <Link to="/about">About</Link>
      </Wrapper>
    </footer>
  )
}
