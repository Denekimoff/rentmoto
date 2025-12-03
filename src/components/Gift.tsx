import React from 'react'
import Wrapper from './Wrapper'
import { Button } from './Button'
import '../styles/gift.css'
import { useStore } from 'zustand'
import storeStates from '../store/useStore'

export default function Gift() {
  const openCallMeModal = useStore(storeStates, (state) => state.openCallMeModal)
  const setText = useStore(storeStates, (state) => state.setSelectedText)

  const handleButtonClick = (text: string) => {
    setText(text)
    openCallMeModal()
  }
  return (
    <section className="gift">
      <Wrapper>
        <div className="gift__container">
          <h3 className="gift__container__title">Подарочный сертификат</h3>
          <div className="gift__container__description">
            <p>Хотите сделать оригинальный подарок?</p>
            <p>Подарите незабываемые эмоции - лучший подарок!</p>
          </div>
          <div className="gift__container__cart">
            <div className="gift__container__cart__info">
              <p>
                Хотите удивить своих близких оригинальным подарком? Подарочный сертификат на
                экскурсию на квадроциклах станет не просто интересным подарком, но и реальной
                возможностью приблизить Ваших друзей и близких к новому увлечению.
              </p>
              <Button
                text="Подберём сертификат для Вас"
                onClick={() => handleButtonClick('Подберём сертификат для Вас')}
              />
            </div>
            <div className="gift__container__cart__image">
              <p className="gift__container__cart__image__description">Маршрут: Лесная прогулка</p>
              <img src="/sertificate.webp" alt="" />
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}
