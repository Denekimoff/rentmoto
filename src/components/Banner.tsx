import React from 'react'
import '../styles/banner.css'
import Button from './Button'
import Wrapper from './Wrapper'

export default function Banner() {
  return (
    <section className="banner">
      <Wrapper>
        <div className="banner-view">
          <h1 className="banner-view__title">Экскурсии на квадроциклах в Минске</h1>
          <p className="banner-view__description">приезжайте за новыми ощущениями и эмоциями!</p>
          <Button text="Подобрать маршрут" />
        </div>
      </Wrapper>
    </section>
  )
}
