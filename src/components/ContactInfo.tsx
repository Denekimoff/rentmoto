import React from 'react'
import '../styles/contact-info.css'

export default function ContactInfo() {
  return (
    <div className='contact-info'>
      <div className="contact-info__address">
        <a target='_blank' href="https://yandex.by/maps/157/minsk/house/Zk4YcwdpSkYDQFtpfXVzdX9nZQ==/?ll=27.509986%2C53.923621&utm_medium=mapframe&utm_source=maps&z=16.78">Минск, Улица Тимирязева, 65</a>
        <a href='tel:+375298734927'>+375 (29) 123-45-67</a>
        <a href="mailto:ekimoffdenis@gmail.com">rent-moto@gmail.com</a>
        <div>
          <p>ПН - СБ: с 9-00 до 17-00</p>
          <p>ВС: выходной</p>
        </div>
      </div>
      <div className="contact-info__social"></div>
    </div>
)}
