import { FormDataType } from './types/types'

//------- Блокируем скролл
export function handleStopScroll() {
  const scrollY = window.scrollY

  document.body.style.position = 'fixed'
  document.body.style.top = `-${scrollY}px`
  document.body.style.width = '100%'
  document.body.style.overflowY = 'scroll'

  document.body.dataset.scrollY = scrollY.toString()
}

//------- Восстанавливаем скролл при закрытии
export function handleContinueScroll() {
  const savedScrollY = document.body.dataset.scrollY
  document.body.style.position = ''
  document.body.style.top = ''
  document.body.style.width = ''
  document.body.style.overflowY = ''

  if (savedScrollY) {
    window.scrollTo(0, parseInt(savedScrollY))
  }
}

//-------- Функция для извлечения цифр из номера
export const extractDigits = (phone: string): string => {
  return phone.replace(/\D/g, '')
}

//-------- Функция для форматирования номера
export const formatPhoneNumber = (input: string): string => {
  let digits = extractDigits(input)

  // Если начинается с 80, меняем на 375
  if (digits.startsWith('80') && digits.length >= 2) {
    digits = '375' + digits.substring(2)
  }
  // Если просто цифры и начинаются не с 375, добавляем
  else if (digits && !digits.startsWith('375') && !digits.startsWith('+')) {
    digits = '375' + digits
  }

  // Ограничиваем длину
  if (digits.length > 12) {
    digits = digits.substring(0, 12)
  }

  // Форматируем
  let formatted = ''
  if (digits.startsWith('375')) {
    formatted = '+375'
    const phoneDigits = digits.substring(3)

    // Код оператора
    if (phoneDigits.length > 0) {
      formatted += ' ('
      formatted += phoneDigits.substring(0, 2)
    }

    // Первые 3 цифры номера
    if (phoneDigits.length >= 2) {
      formatted += ') '
      formatted += phoneDigits.substring(2, 5)
    }

    // Следующие 2 цифры
    if (phoneDigits.length >= 5) {
      formatted += '-'
      formatted += phoneDigits.substring(5, 7)
    }

    // Последние 2 цифры
    if (phoneDigits.length >= 7) {
      formatted += '-'
      formatted += phoneDigits.substring(7, 9)
    }
  }

  return formatted
}

//------- Валидация телефона
export const validatePhone = (phone: string): boolean => {
  const digits = extractDigits(phone)
  return digits.startsWith('375') && digits.length === 12
}

//------- Валидация даты
export const validateDate = (date: string): boolean => {
  if (!date) return false

  const selectedDate = new Date(date)
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  return selectedDate >= today
}

const TELEGRAM_BOT_TOKEN = '8474452632:AAEH-_wjC842q1oOPm7rBseOsmxB7CKZbEo'
const TELEGRAM_CHAT_ID = '725913982'

// Функция отправки данных в Telegram
export const sendToTelegram = async (
  formData: FormDataType,
  selectedText: string,
  selectedRoute: string,
) => {
  try {
    const message = `📩<b>Вам новая заявка:</b>

        <b>Заголовок:</b> ${selectedText}
        <b>Имя:</b> ${formData.name.trim()}
        <b>Номер телефона:</b> ${formData.phone}
        <b>Никнейм телеграм:</b> ${formData.telegram?.trim() || 'не указан'}
        <b>Выбранный маршрут:</b> ${selectedRoute}
        <b>Выбранная дата:</b> ${formData.bookingDate || '-'}

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
