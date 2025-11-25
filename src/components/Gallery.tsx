import React from 'react'
import Wrapper from './Wrapper'
import '../styles/gallery.css'

export default function Gallery() {
  const galleryData = [
    '/gallery1.png',
    '/gallery2.png',
    '/gallery3.png',
    '/gallery1.png',
    '/gallery2.png',
    '/gallery3.png',
  ]
  return (
    <section className="gallery">
      <Wrapper>
        <div className="gallery__container">
          <h3 className="gallery__container__title">Галерея</h3>
          <ul className="gallery__container__list">
            {galleryData.map((el, id) => (
              <li key={id} className="gallery__container__list__item">
                <img src={el} alt={`Изображение ${id + 1}`} />
              </li>
            ))}
          </ul>
        </div>
      </Wrapper>
    </section>
  )
}
