
import React from 'react'
import '../styles/yandex-map.css'

export default function YandexMap() {
  return (
    <div className='yandex-map'>
        <div>
            {/* <a href="https://yandex.by/maps/157/minsk/?utm_medium=mapframe&utm_source=maps">Минск</a> */}
            <iframe src="https://yandex.by/map-widget/v1/?ll=27.509986%2C53.923621&mode=whatshere&whatshere%5Bpoint%5D=27.508755%2C53.924667&whatshere%5Bzoom%5D=17&z=16.78" width="560" height="400" frameBorder={1} allowFullScreen={true}></iframe>
        </div>
    </div>
  )
}
