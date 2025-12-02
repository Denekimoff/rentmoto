import React from 'react'
import Wrapper from './Wrapper'
import Navmenu from './Navmenu'
import Logotip from '/logo.svg'
import Button from './Button'
import { Link } from 'react-scroll'
import '../styles/header.css'

export default function Header() {
  return (
    <header className="header">
      <Wrapper>
        <div className="header__container">
          <div className="header__container__logo">
            <Link
              to="banner"
              smooth={true}
              duration={500}
              className="header__container__logo__link"
            >
              <img src={Logotip} alt="logo" />
            </Link>
          </div>
          <Navmenu />
          <div className="header__container__contact-box">
            <a href="tel:+375298734927">+375 (29) 123-45-67</a>
            <Button text="Перезвоните мне" />
          </div>
        </div>
      </Wrapper>
    </header>
  )
}
