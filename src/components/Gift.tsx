import React from 'react'
import Wrapper from './Wrapper'
import Button from './Button'
import Logotip from '/logo.svg'
import '../styles/gift.css'

export default function Gift() {
  return (
    <section className='gift'>
        <Wrapper>
            <div className="gift__container">
                <h3 className="gift__container__title">Подарочный сертификат</h3>
                <div className="gift__container__description">
                    <p>Хотите сделать оригинальный подарок?</p>
                    <p>Подарите незабываемые эмоции - лучший подарок!</p>
                </div>
                <div className="gift__container__cart">
                    <div className="gift__container__cart__info">
                        <p>Хотите удивить своих близких оригинальным подарком? Подарочный сертификат на экскурсию на квадроциклах станет не просто интересным подарком, но и реальной возможностью приблизить Ваших друзей и близких к новому увлечению.</p>
                        <Button text='Подрерём сертификат для Вас'/>
                    </div>
                    <div className="gift__container__cart__image">
                        <p className="gift__container__cart__image__description">Маршрут: Лесная прогулка</p>
                        <img src="/sertificate.png" alt="" />
                    </div>
                </div>
            </div>
        </Wrapper>
    </section>
  )
}
