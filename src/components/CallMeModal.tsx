import React, { useEffect, useState } from 'react'
import { useStore } from 'zustand'
import storeStates from '../store/useStore'
import { FormDataType, FormErrorsType } from '../types/types'
import {
  formatPhoneNumber,
  handleContinueScroll,
  handleStopScroll,
  sendToTelegram,
  validatePhone,
} from '../functions'
import '../styles/booking-modal.css'

export default function CallMeModal() {
  const isOpen = useStore(storeStates, (state) => state.callMe.isModalOpen)
  const selectedText = useStore(storeStates, (state) => state.callMe.selectedText)
  const setSelectedText = useStore(storeStates, (state) => state.setSelectedText)
  const closeModal = useStore(storeStates, (state) => state.closeCallMeModal)

  const [formData, setFormData] = useState<FormDataType>({
    name: '',
    phone: '',
    telegram: '',
  })

  const [errors, setErrors] = useState<FormErrorsType>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

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
      await sendToTelegram(formData, selectedText, '-')

      setSubmitStatus('success')
      handleClose()
      alert(
        `✅ Заявка успешно отправлена!\n${formData.name.trim()}, мы свяжемся с вами в ближайшее время!`,
      )
    } catch (error) {
      console.error('Ошибка при отправке:', error)
      setSubmitStatus('error')
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
    setSelectedText('')
    setErrors({})
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
          <h2>{selectedText}</h2>
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
              onChange={handleChange}
              placeholder="+375 (29) 123-45-67"
              className={errors.phone ? 'error' : ''}
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

          <div className="form-footer">
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Отправка...' : 'Отправить'}
            </button>
            <p className="required-note">* - обязательные поля</p>
          </div>
        </form>
      </div>
    </div>
  )
}
