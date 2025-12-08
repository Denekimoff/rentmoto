import React from 'react'
import { Link } from 'react-scroll'
import { useStore } from 'zustand'
import storeStates from '../store/useStore'
import { NavmenuProps } from '../types/types'
import '../styles/navmenu.css'

export default function Navmenu({ onLinkClick }: NavmenuProps) {
  const navListData = useStore(storeStates, (state) => state.data.navListData)

  const handleClick = () => {
    if (onLinkClick && window.innerWidth <= 560) {
      onLinkClick()
    }
  }

  return (
    <nav className="nav-menu">
      <ul className="nav-menu__list">
        {navListData.map((el, id) => (
          <li key={id} className="nav-menu__list__item">
            <Link
              href="#"
              to={el.section}
              smooth={true}
              offset={-97}
              duration={500}
              className="nav-menu__list__item__link"
              onClick={handleClick}
              aria-label={el.text}
              title={el.title}
              tabIndex={0}
            >
              {el.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
