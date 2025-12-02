import React from 'react'
import { useStore } from 'zustand'
import storeStates from '../store/useStore'
import Wrapper from './Wrapper'
import '../styles/ourperson.css'

export default function OurPerson() {
  const ourPersonsData = useStore(storeStates, (state) => state.data.ourPersonsData)
  return (
    <section className="ourperson">
      <Wrapper>
        <div className="ourperson__container">
          <h3 className="ourperson__container__title">Наша команда</h3>
          <ul className="ourperson__container__list">
            {ourPersonsData.map((el, id) => (
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
