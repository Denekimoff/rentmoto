import React from 'react'
import { Link } from 'react-scroll'
import Wrapper from './Wrapper'
import '../styles/banner.css'

export default function Banner() {
  return (
    <section className="banner">
      <Wrapper>
        <div className="banner-view">
          <h1 className="banner-view__title">Экскурсии на квадроциклах в Минске</h1>
          <p className="banner-view__description">приезжайте за новыми ощущениями и эмоциями!</p>
          <Link to="routes" smooth={true} offset={-97} duration={500} className="banner-view__link">
            Пододбрать маршрут
          </Link>
        </div>
      </Wrapper>
    </section>
  )
}
