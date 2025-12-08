import Wrapper from './Wrapper'
import '../styles/footer.css'

export default function Footer() {
  const date = new Date()
  const year = date.getFullYear()

  return (
    <footer className="footer">
      <Wrapper>
        <div className="footer__container">
          <span className="footer__container__text">
            (c) {year} ООО «КвадроМото». Все права защищены.
          </span>
        </div>
      </Wrapper>
    </footer>
  )
}
