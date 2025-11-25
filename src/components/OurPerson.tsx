import React from 'react'
import Wrapper from './Wrapper'
import '../styles/ourperson.css'

export default function OurPerson() {
  const personData = [
    {
      name: 'Юлиана',
      job: 'руководитель',
      avatar: '/ourperson1.png',
    },
    {
      name: 'Максим',
      job: 'старший инструктор',
      avatar: '/ourperson2.png',
    },
    {
      name: 'Кристина',
      job: 'администратор',
      avatar: '/ourperson3.png',
    },
    {
      name: 'Юрий',
      job: 'старший механик',
      avatar: '/ourperson4.png',
    },
  ]
  return (
    <section className="ourperson">
      <Wrapper>
        <div className="ourperson__container">
          <h3 className="ourperson__container__title">Наша команда</h3>
          <ul className="ourperson__container__list">
            {personData.map((el, id) => (
              <li key={id} className="ourperson__container__list__item">
                <img
                  src={el.avatar}
                  alt={`Аватар ${id + 1}`}
                  className="ourperson__container__list__item__avatar"
                />
                <div className="ourperson__container__list__item__info">
                  <p className="ourperson__container__list__item__info__title">{el.name}</p>
                  <p className="ourperson__container__list__item__info__description">{el.job}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Wrapper>
    </section>
  )
}
