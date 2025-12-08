import '../styles/yandex-map.css'

export default function YandexMap() {
  return (
    <div className="yandex-map">
      <iframe
        title="Карта"
        src="https://yandex.by/map-widget/v1/?ll=27.531673%2C53.896292&mode=poi&poi%5Bpoint%5D=27.530970%2C53.901092&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D108734637626&z=13.98"
        allowFullScreen={true}
      ></iframe>
    </div>
  )
}
