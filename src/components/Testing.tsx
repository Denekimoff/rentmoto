import React from 'react'
import Wrapper from './Wrapper'
import { Button } from './Button'
import '../styles/testing.css'

export default function Testing() {
  return (
    <section className="testing">
      <Wrapper>
        <div className="testing__container">
          <h4 className="testing__container__title">Затрудняетесь выбрать маршрут?</h4>
          <p className="testing__container__description">
            Пройдите тест и мы поможем вам подобрать оптимальную под вас экскурсию
          </p>
          <Button text="Наберите мне" />
        </div>
      </Wrapper>
    </section>
  )
}
