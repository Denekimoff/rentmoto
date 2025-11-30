import React from 'react'
import '../styles/contact-info.css'

export default function ContactInfo() {
  const contactData = [
    {
      text: '+375 (29) 123-45-67',
      href: 'tel:+375298734927',
    },
    {
      text: 'rent-moto@gmail.com',
      href: 'mailto:ekimoffdenis@gmail.com',
    },
    {
      text: 'Минск, улица Западная 19а',
      href: 'https://yandex.by/maps/org/kvadromototsentr/108734637626/?utm_medium=mapframe&utm_source=maps',
    },
  ]
  const socialData = [
    {
      alt: 'telegram',
      href: 'https://t.me/@ekmvdn',
      src: '/social-telegram.svg',
    },
    {
      alt: 'instagram',
      href: 'https://www.instagram.com/',
      src: '/social-instagram.svg',
    },
    {
      alt: 'whatsapp',
      href: 'https://www.whatsapp.com/?lang=ru',
      src: '/social-whatsapp.svg',
    },
  ]

  return (
    <div className='contact-info'>
      <div className="contact-info__address">
        <ul className='contact-info__address__list'>
          {contactData.map((el, id) =>
            <li key={id} className='contact-info__address__list__item'>
              <a target='_blank' href={el.href}>{el.text}</a>
            </li>
          )}
        </ul>
        <div>
          <p>ПН - СБ: с 9-00 до 18-00</p>
          <p>ВС: выходной</p>
        </div>
      </div>
      <div className="contact-info__social">
        <ul className="contact-info__social__list">
          {socialData.map((el, id) =>
            <li key={id} className='contact-info__social__list__item'>
              <a target='_blank' href={el.href}>
                <img src={el.src} alt={el.alt} />
              </a>
            </li>)}
        </ul>
      </div>
    </div>
)}
