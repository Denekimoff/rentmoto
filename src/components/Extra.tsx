import React from 'react'
import { useStore } from 'zustand'
import storeStates from '../store/useStore'
import Wrapper from './Wrapper'
import '../styles/extra.css'

export default function Extra() {
  const extraData = useStore(storeStates, (state) => state.data.extraData)
  return (
    <section className="extra">
      <Wrapper>
        <div className="extra__container">
          <h3 className="extra__container__title">Дополнительные услуги</h3>
          <ul className="extra__container__list">
            {extraData.map((el, id) => (
              <li key={id} className="extra__container__list__item">
                <img src={el.src} alt={el.text} className="extra__container__list__item__image" />
                <div className="extra__container__list__item__info">
                  <p>{el.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Wrapper>
    </section>
  )
}
