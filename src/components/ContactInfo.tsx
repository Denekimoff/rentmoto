import React from 'react'
import { useStore } from 'zustand'
import storeStates from '../store/useStore'
import '../styles/contact-info.css'

export default function ContactInfo() {
  const contactsData = useStore(storeStates, (state) => state.data.contactsData)
  const socialData = useStore(storeStates, (state) => state.data.socialData)
  return (
    <div className="contact-info">
      <div className="contact-info__address">
        <ul className="contact-info__address__list">
          {contactsData.map((el, id) => (
            <li key={id} className="contact-info__address__list__item">
              <a target="_blank" href={el.href}>
                {el.text}
              </a>
            </li>
          ))}
        </ul>
        <div>
          <p>ПН - СБ: с 9-00 до 18-00</p>
          <p>ВС: выходной</p>
        </div>
      </div>
      <div className="contact-info__social">
        <ul className="contact-info__social__list">
          {socialData.map((el, id) => (
            <li key={id} className="contact-info__social__list__item">
              <a target="_blank" href={el.href}>
                <img src={el.src} alt={el.alt} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
