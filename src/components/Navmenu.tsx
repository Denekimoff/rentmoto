import React from 'react'
import { Link } from 'react-scroll'
import '../styles/navmenu.css'

export default function Navmenu() {
  const navList = [
    {
      section: 'routes',
      text: 'МАРШРУТЫ',
    },
    {
      section: 'gallery',
      text: 'ГАЛЕРЕЯ',
    },
    {
      section: 'sales',
      text: 'АКЦИИ',
    },
    {
      section: 'contacts',
      text: 'КОНТАКТЫ',
    },
    {
      section: 'reserve',
      text: 'ЗАБРОНИРОВАТЬ',
    },
  ]
  return (
    <nav className="nav-menu">
      <ul className="nav-menu__list">
        {navList.map((el, id) => (
          <li key={id} className="nav-menu__list__item">
            <Link to={el.section} smooth={true} offset={-97} duration={500} className='nav-menu__list__item__link'>{el.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
