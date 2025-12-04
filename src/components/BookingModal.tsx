import React, { useEffect, useState } from 'react'
import { useStore } from 'zustand'
import storeStates from '../store/useStore'
import { FormDataType, FormErrorsType } from '../types/types'
import {
  formatPhoneNumber,
  handleContinueScroll,
  handleStopScroll,
  validateDate,
  validatePhone,
} from '../functions'
import '../styles/booking-modal.css'
const TELEGRAM_BOT_TOKEN = '8474452632:AAEH-_wjC842q1oOPm7rBseOsmxB7CKZbEo'
const TELEGRAM_CHAT_ID = '725913982'

// Функция отправки данных в Telegram
export const sendToTelegram = async (formData: FormDataType, selectedRoute?: string) => {
  try {
    const message = `📩<b>Вам новая заявка:</b>

        <b>Имя:</b> ${formData.name.trim()}
        <b>Номер телефона:</b> ${formData.phone}
        <b>Никнейм телеграм:</b> ${formData.telegram?.trim() || 'не указан'}
        <b>Выбранный маршрут:</b> ${selectedRoute}
        <b>Выбранная дата:</b> ${formData.bookingDate}

      <b>Время заявки:</b> ${new Date().toLocaleString('ru-RU')}`

    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`

    const params = {
      chat_id: TELEGRAM_CHAT_ID,
      text: message,
      parse_mode: 'HTML',
    }
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(`Telegram API error: ${errorData.description || response.status}`)
    }

    const result = await response.json()
    return result
  } catch (error) {
    console.error('Ошибка отправки в Telegram:', error)
    throw error
  }
}

export const BookingModal: React.FC = () => {
  const isOpen = useStore(storeStates, (state) => state.booking.isModalOpen)
  const selectedRoute = useStore(storeStates, (state) => state.booking.selectedRoute)
  const closeModal = useStore(storeStates, (state) => state.closeBookingModal)

  const [formData, setFormData] = useState<FormDataType>({
    name: '',
    phone: '',
    telegram: '',
    bookingDate: '',
  })
  const [errors, setErrors] = useState<FormErrorsType>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  // Минимальная дата (сегодня)
  const minDate = new Date().toISOString().split('T')[0]

  const validateForm = (): boolean => {
    const newErrors: FormErrorsType = {}

    // Валидация имени
    if (!formData.name.trim()) {
      newErrors.name = 'Введите имя'
    } else if (formData.name.length < 2) {
      newErrors.name = 'Имя слишком короткое'
    }

    // Валидация телефона
    if (!formData.phone) {
      newErrors.phone = 'Введите номер телефона'
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Введите номер в формате +375 (XX) XXX-XX-XX'
    }

    // Валидация даты
    if (!formData.bookingDate) {
      newErrors.bookingDate = 'Выберите дату'
    } else if (!validateDate(formData.bookingDate)) {
      newErrors.bookingDate = 'Дата не может быть в прошлом'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    if (name === 'phone') {
      const formatted = formatPhoneNumber(value)
      setFormData((prev) => ({
        ...prev,
        [name]: formatted,
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }))
    }

    // Очищаем ошибку при изменении поля
    if (errors[name as keyof FormErrorsType]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }))
    }

    // Сбрасываем статус при изменении полей
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Отправляем данные в Telegram
      const result = await sendToTelegram(formData, selectedRoute || 'Не указан')
      if (result.ok) {
        setSubmitStatus('success')
        handleClose()
        // Показываем успешное сообщение
        alert(
          `✅ Заявка успешно отправлена!\n\nДетали:\n• Маршрут: ${selectedRoute}\n• Дата: ${formData.bookingDate}\n• Имя: ${formData.name.trim()}\n\nМы свяжемся с вами в ближайшее время!`,
        )
      }
    } catch (error) {
      console.error('Ошибка при отправке:', error)
      setSubmitStatus('error')
      // Показываем сообщение об ошибке
      alert(
        `❌ Ошибка при отправке заявки.\n\nПожалуйста, попробуйте еще раз или свяжитесь с нами по телефону.`,
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    closeModal()
    setFormData({ name: '', phone: '', telegram: '', bookingDate: '' })
    setErrors({})
    setSubmitStatus('idle')
  }

  useEffect(() => {
    if (isOpen) {
      handleStopScroll()
      return () => {
        handleContinueScroll()
      }
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Бронирование маршрута</h2>
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
              disabled={isSubmitting}
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
              onChange={handleChange}
              placeholder="+375 (XX) XXX-XX-XX"
              className={errors.phone ? 'error' : ''}
              disabled={isSubmitting}
            />
            {errors.phone && <span className="error-message">{errors.phone}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="telegram">Никнейм в Телеграм (необязательно)</label>
            <input
              type="text"
              id="telegram"
              name="telegram"
              value={formData.telegram}
              onChange={handleChange}
              placeholder="@username"
              disabled={isSubmitting}
            />
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

          <div className="form-group">
            <label htmlFor="bookingDate">Выберите дату *</label>
            <input
              type="date"
              id="bookingDate"
              name="bookingDate"
              value={formData.bookingDate}
              onChange={handleChange}
              min={minDate}
              className={errors.bookingDate ? 'error' : ''}
              disabled={isSubmitting}
            />
            {errors.bookingDate && <span className="error-message">{errors.bookingDate}</span>}
          </div>

          <div className="form-footer">
            {submitStatus === 'success' && (
              <div className="success-status">
                <span className="success-icon">✓</span>
                Заявка успешно отправлена!
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="error-status">
                <span className="error-icon">⚠️</span>
                Ошибка отправки. Попробуйте еще раз.
              </div>
            )}
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Отправка...' : 'Забронировать'}
            </button>
            <p className="required-note">* - обязательные поля</p>
          </div>
        </form>
      </div>
    </div>
  )
}
