import "./footer.scss"
import { Link } from "react-router-dom"

function Footer() {
	return (
		<div className="footer">
			<div className="container">
				<div className="footer__content">
					<ul className="footer__left-list">
						<li className="footer__list-item"><Link className="footer__link" to='/'>Главная</Link></li>
						<li className="footer__list-item"><Link className="footer__link" to='/news'>Новости</Link></li>
						<li className="footer__list-item"><Link className="footer__link" to='/calendar'>Календарь</Link></li>
					</ul>
					<ul className="footer__mid-list">
						<li className="footer__list-item"><Link className="footer__link" to='/studboard'>Состав</Link></li>
						<li className="footer__list-item"><Link className="footer__link" to='/contacts'>Связаться с нами</Link></li>
						<li className="footer__list-item">rector@spbgasu.ru</li>
					</ul>
					<ul className="footer__right-list">
						<li className="footer__list-item">190005, г. Санкт-Петербург</li>
						<li className="footer__list-item">2-я Красноармейская ул., д. 4
						</li>
						<li className="footer__list-item">+7 (812) 575-05-34</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Footer

