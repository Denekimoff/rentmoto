import React from 'react'
import '../styles/navmenu.css'

export default function Navmenu() {
  const navList = ['МАРШРУТЫ', 'ГАЛЕРЕЯ', 'ВОПРОС-ОТВЕТ', 'КОНТАКТЫ', 'ЗАБРОНИРОВАТЬ']
  return (
    <nav className="nav-menu">
      <ul className="nav-menu__list">
        {navList.map((el, id) => (
          <li key={id} className="nav-menu__list__item">
            {el}
          </li>
        ))}
      </ul>
    </nav>
  )
}
