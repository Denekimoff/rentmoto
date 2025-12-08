import React from 'react'
import YandexMap from './YandexMap'
import YandexReviews from './YandexReviews'
import '../styles/yandex-metrics.css'

export default function YandexMetrics() {
  return (
    <div className="yandex-metrics">
      <YandexMap />
      <YandexReviews />
    </div>
  )
}
