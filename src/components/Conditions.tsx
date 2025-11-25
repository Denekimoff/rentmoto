import React from 'react'
import Wrapper from './Wrapper'
import '../styles/conditions.css'

export default function Conditions() {
  const conditionsData = [
    'При прокате или аренде строго соблюдать правила техники безопасности и все требования инструктора!',
    'К управлению НЕ ДОПУСКАЮТСЯ лица младше 16 лет и лица в алкогольном опьянении!',
    'Распивать спиртные напитки во время проката, аренды ЗАПРЕЩЕНО! (После? На ваше усмотрение)',
    'Управление осуществляйте в меру своих сил и возможностей. Не переоценивайте себя! Это опасно!!!',
    'Перед каждым катанием опытный инструктор научит Вас основам управления и будет сопровождать на протяжении всего маршрута.',
    'При прокате или аренде строго соблюдать правила техники безопасности и все требования инструктора!',
  ]
  return (
    <section className="conditions">
      <Wrapper>
        <div className="conditions__container">
          <h3 className="conditions__container__title">Условия предоставления услуг</h3>
          <ul className="conditions__container__list">
            {conditionsData.map((el, id) => (
              <li key={id} className="conditions__container__list__item">
                {el}
              </li>
            ))}
          </ul>
        </div>
      </Wrapper>
    </section>
  )
}
