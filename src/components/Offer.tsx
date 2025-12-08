import React from 'react'
import { useStore } from 'zustand'
import storeStates from '../store/useStore'
import Wrapper from './Wrapper'
import '../styles/offer.css'

export default function Offer() {
  const offerData = useStore(storeStates, (state) => state.data.offerData)
  return (
    <section className="offer">
      <Wrapper>
        <ul className="offer__list">
          {offerData.map(({ logo, title, description }, id) => (
            <li key={id} className="offer__list__item">
              <img src={logo} alt="Logo" />
              <span />
              <p>
                <strong>{title}</strong>
              </p>
              <p>{description}</p>
            </li>
          ))}
        </ul>
      </Wrapper>
    </section>
  )
}
