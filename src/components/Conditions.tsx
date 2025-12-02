import React from 'react'
import { useStore } from 'zustand'
import storeStates from '../store/useStore'
import Wrapper from './Wrapper'
import '../styles/conditions.css'

export default function Conditions() {
  const conditionsData = useStore(storeStates, (state) => state.data.conditionsData)
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
