import React from 'react'
import { useStore } from 'zustand'
import storeStates from '../store/useStore'
import Wrapper from './Wrapper'
import { Button } from './Button'
import '../styles/routes.css'
import { BookingModal } from './BookingModal'

export default function Routes() {
  const routesData = useStore(storeStates, (state) => state.data.routesData)
  const setSelectedRoute = useStore(storeStates, (state) => state.setSelectedRoute)
  const openBookingModal = useStore(storeStates, (state) => state.openBookingModal)

  const handleBookClick = (routeTitle: string) => {
    setSelectedRoute(routeTitle)
    openBookingModal()
  }
  return (
    <section className="routes">
      <Wrapper>
        <div className="routes__container">
          <h3 className="routes__container__title">Наши маршруты</h3>
          <div className="routes__container__list">
            {routesData.map((el, id) => (
              <div key={id} className="routes__container__list__item">
                <div className="routes__container__list__item__info">
                  <h4>{el.title}</h4>
                  <p>от {el.price} рублей</p>
                  <div className="routes__container__list__item__info__description">
                    <p>
                      ВРЕМЯ В ПУТИ: <span>{el.time}</span>
                    </p>
                    <p>
                      РАССТОЯНИЕ: <span>{el.distance}</span>
                    </p>
                    <p>
                      СЛОЖНОСТЬ: <span>{el.rate}</span>
                    </p>
                  </div>
                  <div className="routes__container__list__item__info__route">
                    <h6>МАРШРУТ:</h6>
                    <p>{el.route}</p>
                  </div>
                  <Button text="Забронировать" onClick={() => handleBookClick(el.title)} />
                </div>
                <div className="routes__container__list__item__images">
                  {el.image.map((el, idx) => (
                    <img key={idx} src={el} alt={`Изображение ${idx + 1}`} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
      <BookingModal />
    </section>
  )
}
