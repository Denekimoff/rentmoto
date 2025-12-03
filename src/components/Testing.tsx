import React from 'react'
import Wrapper from './Wrapper'
import { Button } from './Button'
import { useStore } from 'zustand'
import storeStates from '../store/useStore'
import '../styles/testing.css'

export default function Testing() {
  const openCallMeModal = useStore(storeStates, (state) => state.openCallMeModal)
  const setText = useStore(storeStates, (state) => state.setSelectedText)

  const handleButtonClick = (text: string) => {
    setText(text)
    openCallMeModal()
  }

  return (
    <section className="testing">
      <Wrapper>
        <div className="testing__container">
          <h4 className="testing__container__title">Затрудняетесь выбрать маршрут?</h4>
          <p className="testing__container__description">
            Оставьте заявку и мы с радостью поможем подобрать для Вас оптимальный маршрут
          </p>
          <Button text="Оставить заявку" onClick={() => handleButtonClick('Оставить заявку')} />
        </div>
      </Wrapper>
    </section>
  )
}
