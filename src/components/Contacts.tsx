import React from 'react'
import Wrapper from './Wrapper'
import ContactInfo from './ContactInfo'
import '../styles/contacts.css'
import YandexMetrics from './YandexMetrics'

export default function Contacts() {
  return (
    <section className="contacts">
      <Wrapper>
        <div className="contacts__container">
          <h3 className="contacts__container__title">Контакты</h3>
          <div className="contacts__container__menu">
            <ContactInfo />
            <YandexMetrics />
          </div>
        </div>
      </Wrapper>
    </section>
  )
}
