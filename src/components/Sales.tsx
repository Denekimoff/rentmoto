import React from 'react'
import { useStore } from 'zustand'
import storeStates from '../store/useStore'
import Wrapper from './Wrapper'
import { Button } from './Button'
import '../styles/sales.css'

export default function Sales() {
  const salesData = useStore(storeStates, (state) => state.data.salesData)
  const openCallMeModal = useStore(storeStates, (state) => state.openCallMeModal)
  const setText = useStore(storeStates, (state) => state.setSelectedText)

  const handleButtonClick = (text: string) => {
    setText(text)
    openCallMeModal()
  }
  return (
    <section className="sales">
      <Wrapper>
        <div className="sales__container">
          <h3 className="sales__container__title">Спецпредложения</h3>
          <ul className="sales__container__list">
            {salesData.map((el, id) => (
              <li key={id} className="sales__container__list__item">
                <div>
                  <img
                    src={el.image}
                    alt={`Аватар ${id + 1}`}
                    className="sales__container__list__item__avatar"
                  />
                </div>
                <div className="sales__container__list__item__info">
                  <p className="sales__container__list__item__info__title">Скидка{el.title}</p>
                  <p className="sales__container__list__item__info__description">
                    {el.description}
                  </p>
                  <Button
                    text="Забрать!"
                    onClick={() => handleButtonClick(`Получить скидку ${el.title}`)}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Wrapper>
    </section>
  )
}
