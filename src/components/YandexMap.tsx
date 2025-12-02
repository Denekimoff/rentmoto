import React from 'react'
import '../styles/yandex-map.css'

export default function YandexMap() {
  return (
    <div className="yandex-map">
      <iframe
        src="https://yandex.by/map-widget/v1/?display-text=%D0%92%D0%B5%D0%B7%D0%B4%D0%B5%D1%85%D0%BE%D0%B4%D1%8B%2C%20%D0%BA%D0%B2%D0%B0%D0%B4%D1%80%D0%BE%D1%86%D0%B8%D0%BA%D0%BB%D1%8B&ll=27.532011%2C53.900777&mode=search&oid=108734637626&ol=biz&sctx=ZAAAAAgBEAAaKAoSCWR3gZICgztAEUAYeO499kpAEhIJXALwT6kSlT8Rb%2FHwngPLgT8iBgABAgMEBSgKOABA%2FJ4GSAFqAnVhnQHNzMw9oAEAqAEAvQEeJeuuwgEGuszbiJUDggIbKChjYXRlZ29yeV9pZDooMTg0MTA3MzIzKSkpigIJMTg0MTA3MzIzkgIAmgIMZGVza3RvcC1tYXBz&sll=27.532011%2C53.900777&sspn=0.024136%2C0.010195&text=%7B%22text%22%3A%22%D0%92%D0%B5%D0%B7%D0%B4%D0%B5%D1%85%D0%BE%D0%B4%D1%8B%2C%20%D0%BA%D0%B2%D0%B0%D0%B4%D1%80%D0%BE%D1%86%D0%B8%D0%BA%D0%BB%D1%8B%22%2C%22what%22%3A%5B%7B%22attr_name%22%3A%22category_id%22%2C%22attr_values%22%3A%5B%22184107323%22%5D%7D%5D%7D&z=15.71"
        allowFullScreen={true}
      ></iframe>
    </div>
  )
}
