import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { useStore } from 'zustand'
import storeStates from '../store/useStore'
import Wrapper from './Wrapper'
import Navmenu from './Navmenu'
import { Button } from './Button'
import Logotip from '/logo.svg'
import '../styles/header.css'

export default function Header() {
  const openCallMeModal = useStore(storeStates, (state) => state.openCallMeModal)
  const setText = useStore(storeStates, (state) => state.setSelectedText)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleButtonClick = (text: string) => {
    setText(text)
    openCallMeModal()
    // Закрываем меню при клике на кнопку на мобильных устройствах
    if (window.innerWidth <= 560) {
      setIsMenuOpen(false)
    }
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

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
              onClick={closeMenu}
            >
              <img src={Logotip} alt="logo" />
            </Link>
          </div>

          {/* Бургер-иконка */}
          <button
            className={`header__burger ${isMenuOpen ? 'header__burger--active' : ''}`}
            onClick={toggleMenu}
            aria-label="Открыть меню"
            aria-expanded={isMenuOpen}
          >
            <span className="header__burger-line"></span>
            <span className="header__burger-line"></span>
            <span className="header__burger-line"></span>
          </button>

          {/* Навигационное меню */}
          <div className={`header__nav-wrapper ${isMenuOpen ? 'header__nav-wrapper--active' : ''}`}>
            <Navmenu onLinkClick={closeMenu} />
            <div className="header__container__contact-box header__container__contact-box--mobile">
              <a href="tel:+375298734927" onClick={closeMenu}>
                +375 (29) 123-45-67
              </a>
              <Button text="Перезвоните мне" onClick={() => handleButtonClick('Перезвоните мне')} />
            </div>
          </div>

          {/* Десктопная версия контактов */}
          <div className="header__container__contact-box header__container__contact-box--desktop">
            <a href="tel:+375298734927">+375 (29) 123-45-67</a>
            <Button text="Перезвоните мне" onClick={() => handleButtonClick('Перезвоните мне')} />
          </div>
        </div>
      </Wrapper>

      {/* Затемнение фона при открытом меню */}
      {isMenuOpen && <div className="header__overlay" onClick={closeMenu} aria-hidden="true" />}
    </header>
  )
}
