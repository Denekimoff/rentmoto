import { Link } from 'react-scroll'
import Wrapper from './Wrapper'
import '../styles/banner.css'

export default function Banner() {
  return (
    <section className="banner">
      <Wrapper>
        <div className="banner-view">
          <h1 className="banner-view__title">Аренда квадроциклов в Минске</h1>
          <p className="banner-view__description">приезжайте за новыми ощущениями и эмоциями!</p>
          <Link
            href="#"
            to="routes"
            smooth={true}
            offset={-97}
            duration={500}
            className="banner-view__link"
            aria-label="Подобрать маршрут"
            title="Перейти к секции Маршруты"
            tabIndex={0}
          >
            Подобрать маршрут
          </Link>
        </div>
      </Wrapper>
    </section>
  )
}
