import React, { useState } from 'react'
import { useStore } from 'zustand'
import storeStates from '../store/useStore'
import { FormDataType, FormErrorsType } from '../types/types'
import '../styles/booking-modal.css'

export default function BookingModal() {
  const isOpen = useStore(storeStates, (state) => state.booking.isModalOpen)
  const selectedRoute = useStore(storeStates, (state) => state.booking.selectedRoute)
  const closeModal = useStore(storeStates, (state) => state.closeBookingModal)

  const [formData, setFormData] = useState<FormDataType>({
    name: '',
    phone: '',
    telegram: '',
  })

  const [errors, setErrors] = useState<FormErrorsType>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrorsType = {}

    // Валидация имени
    if (!formData.name.trim()) {
      newErrors.name = 'Имя обязательно для заполнения'
    } else if (formData.name.length < 2) {
      newErrors.name = 'Имя должно содержать минимум 2 символа'
    }

    // Валидация телефона
    const phoneRegex = /^\+375\s\(\d{2}\)\s\d{3}-\d{2}-\d{2}$/
    if (!formData.phone.trim()) {
      newErrors.phone = 'Телефон обязателен для заполнения'
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Формат: +375 (XX) XXX-XX-XX'
    }

    // Валидация телеграма (опционально, но если заполнено - проверяем)
    if (formData.telegram && !formData.telegram.startsWith('@')) {
      newErrors.telegram = 'Никнейм должен начинаться с @'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Очищаем ошибку при изменении поля
    if (errors[name as keyof FormErrorsType]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }))
    }
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value

    // Удаляем все нецифровые символы, кроме + в начале
    let digits = value.replace(/[^\d+]/g, '')

    // Убедимся, что начинается с +375
    if (!digits.startsWith('+375')) {
      // Если пользователь начинает вводить с 375, добавим +
      if (digits.startsWith('375')) {
        digits = '+' + digits
      }
    }

    setFormData((prev) => ({
      ...prev,
      phone: digits,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Здесь отправка данных на сервер
      const bookingData = {
        ...formData,
        route: selectedRoute,
        date: new Date().toISOString(),
      }

      console.log('Отправка данных:', bookingData)

      // Имитация запроса
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // После успешной отправки
      alert('Заявка успешно отправлена!')
      closeModal()
      setFormData({ name: '', phone: '', telegram: '' })
    } catch (error) {
      console.error('Ошибка при отправке:', error)
      alert('Произошла ошибка при отправке заявки')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    closeModal()
    setFormData({ name: '', phone: '', telegram: '' })
    setErrors({})
  }

  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Оставить заявку</h2>
          <button className="modal-close" onClick={handleClose}>
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="booking-form">
          <div className="form-group">
            <label htmlFor="name">Ваше имя *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Иван Иванов"
              className={errors.name ? 'error' : ''}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="phone">Номер телефона *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handlePhoneChange}
              placeholder="8 (999) 123-45-67"
              className={errors.phone ? 'error' : ''}
            />
            {errors.phone && <span className="error-message">{errors.phone}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="telegram">Никнейм в Телеграм</label>
            <input
              type="text"
              id="telegram"
              name="telegram"
              value={formData.telegram}
              onChange={handleChange}
              placeholder="@username"
              className={errors.telegram ? 'error' : ''}
            />
            {errors.telegram && <span className="error-message">{errors.telegram}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="route">Выбранный маршрут</label>
            <input
              type="text"
              id="route"
              name="route"
              value={selectedRoute || ''}
              readOnly
              className="readonly"
            />
          </div>

          <div className="form-footer">
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
            </button>
            <p className="required-note">* - обязательные для заполнения поля</p>
          </div>
        </form>
      </div>
    </div>
  )
}
