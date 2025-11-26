import React from 'react'
import Wrapper from './Wrapper'
import { OfferDataType } from '../types/offerDataType'
import '../styles/offer.css'

export default function Offer() {
  const offerData: Array<OfferDataType> = [
    {
      logo: '/public/1.svg',
      title: 'Увлекательные экскурсии',
      description: 'Маршруты от лесных дорожек до полного бездорожья!',
    },
    {
      logo: '/public/2.svg',
      title: 'Надежная техника',
      description: '15 квадроциклов всех японских брендов',
    },
    {
      logo: '/public/3.svg',
      title: 'Экипировка бесплатно',
      description: 'Необходимая экипировка выдается бесплатно',
    },
    {
      logo: '/public/4.svg',
      title: 'Опытные инструктора',
      description: 'Обеспечат полную безопасность Вашего отдыха',
    },
  ]
  return (
    <section className="offer">
      <Wrapper>
        <ul className="offer__list">
          {offerData.map(({ logo, title, description }, id) => (
            <li key={id} className="offer__list__item">
              <img src={logo} alt="Logo" />
              <span />
              <h4>{title}</h4>
              <p>{description}</p>
            </li>
          ))}
        </ul>
      </Wrapper>
    </section>
  )
}
