import React from 'react'
import Wrapper from './Wrapper'
import '../styles/sales.css'
import Button from './Button'

export default function Sales() {
    const salesData = [
        {
            image: '/public/sales-1.png',
            title: 'Скидка 15%',
            description: 'в честь Дня Рождения - дарим имениннику скидку 15%'
        },
        {
            image: '/public/sales-2.png',
            title: 'Скидка 10%',
            description: 'дарим скидку 10% на первую поездку!'
        }
    ]
  return (
    <section className='sales'>
        <Wrapper>
            <div className="sales__container">
                <h3 className="sales__container__title">Спецпредложения</h3>
                <ul className="sales__container__list">
                    {salesData.map((el, id) =>
                    <li key={id} className='sales__container__list__item'>
                        <img src={el.image} alt={`Аватар ${id+1}`} className='sales__container__list__item__avatar'/>
                        <div className="sales__container__list__item__info">
                            <p className='sales__container__list__item__info__title'>{el.title}</p>
                            <p className='sales__container__list__item__info__description'>{el.description}</p>
                            <Button text='Забрать!'/>
                        </div>
                    </li>)}
                </ul>
            </div>
        </Wrapper>
    </section>
  )
}
