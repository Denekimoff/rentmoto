import React from 'react'
import Wrapper from './Wrapper'
import '../styles/extra.css'
import { text } from 'stream/consumers'

export default function Extra() {
    const extraData = [
        {
            text: 'Эвакуация, ремонт квадроциклов',
            src: '/extra-1.png',
        },
        {
            text: 'Транспортировка техники',
            src: '/extra-2.png',
        },
        {
            text: 'Заправка, чекап, мойка',
            src: '/extra-3.png',
        },
        {
            text: 'Индивидуальные маршруты',
            src: '/extra-4.png',
        },
    ]
  return (
    <section className='extra'>
        <Wrapper>
            <div className="extra__container">
                <h3 className='extra__container__title'>Дополнительные услуги</h3>
                <ul className="extra__container__list">
                    {extraData.map((el, id) =>
                    <li key={id} className='extra__container__list__item'>
                        <img src={el.src} alt={el.text} className='extra__container__list__item__image'/>
                        <div className="extra__container__list__item__info">
                            <p>{el.text}</p>
                        </div>
                    </li>)}
                </ul>
            </div>
        </Wrapper>
    </section>
  )
}
