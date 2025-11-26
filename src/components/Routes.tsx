import React from 'react'
import Wrapper from './Wrapper'
import { RouteDataType } from '../types/routesDataType'
import Button from './Button'
import '../styles/routes.css'

export default function Routes() {
  const routesData: Array<RouteDataType> = [
    {
      title: 'БАЗОВЫЙ',
      price: '160',
      time: '1,5 - 2 часа',
      distance: '20 - 25 км',
      rate: '3',
      route:
        'Смотровая - Родник - Камень Джигита - Адербиевка - Гора Нексис - Грозовые Ворота - Шашлыки - Цыгельский водопад (чаша любви) - Форсаж',
      image: {
        1: '/public/base-route-1.png',
        2: '/public/base-route-2.png',
      },
    },
    {
      title: 'РАСШИРЕННЫЙ',
      price: '630',
      time: '6 - 8 часов',
      distance: '60 - 70 км',
      rate: '4',
      route:
        'Смотровая - Родник - Камень Джигита - Адербиевка - Гора Нексис - Грозовые Ворота - Шашлыки - Цыгельский водопад (чаша любви) - Форсаж',
      image: {
        1: '/public/long-route-1.png',
        2: '/public/long-route-2.png',
      },
    },
    {
      title: 'ПРОДВИНУТЫЙ',
      price: '320',
      time: '4 часа',
      distance: '40 - 50 км',
      rate: '5',
      route: 'Форсаж - Голубая бухта – Заброшенная Тур База – Сухогруз Рио - Форсаж',
      image: {
        1: '/public/expirience-route-1.png',
        2: '/public/expirience-route-2.png',
      },
    },
  ]
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
                  <Button text="Забронировать" />
                </div>
                <div className="routes__container__list__item__images">
                  <img src={el.image[1]} alt="Изображение 1" />
                  <img src={el.image[2]} alt="Изображение 2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  )
}
