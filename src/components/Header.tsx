import React from 'react'
import Wrapper from './Wrapper'
import Navmenu from './Navmenu'
import Logotip from '/logo.svg'
import Button from './Button'
import '../styles/header.css'

export default function Header() {
  return (
    <header className="header">
      <Wrapper>
        <div className="header__container">
          <div className="logo">
            <img src={Logotip} alt="logo" />
          </div>
          <Navmenu />
          <div className="contact-box">
            <a href="tel:+375298734927">+375 (29) 123-45-67</a>
            <Button text="Перезвоните мне" />
          </div>
        </div>
      </Wrapper>
    </header>
  )
}
