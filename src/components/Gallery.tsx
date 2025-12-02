import React from 'react'
import { useStore } from 'zustand'
import storeStates from '../store/useStore'
import Wrapper from './Wrapper'
import '../styles/gallery.css'

export default function Gallery() {
  const galleryData = useStore(storeStates, (state) => state.data.galleryData)
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
