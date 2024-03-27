import { Burger } from '@/widgets/burger/Burger'
import './navigation.scss'
import { Link } from "react-router-dom"
import Logo from '../svg/Logo'

const Navigation = () => {

    return (
        <div className="nav">
            <div className="container">
                <div className="nav__content">
                    <ul className="nav__list">
                        <li className="nav__list-item">
                            <div className="logo">
                                <Link className="nav__list-link" to='/'>
                                    <Logo />
                                </Link>
                            </div>
                        </li>
                        <li className="nav__list-item"><Link className="nav__list-link" to='/'>Главная</Link></li>
                        <li className="nav__list-item"><Link className="nav__list-link" to='/news'>Новости</Link></li>
                        <li className="nav__list-item"><Link className="nav__list-link" to='/calendar'>Календарь</Link></li>
                        <li className="nav__list-item"><Link className="nav__list-link" to='/studboard'>Состав</Link></li>
                        <li className="nav__list-item"><Link className="nav__list-link" to='/contacts'>Связаться с нами</Link></li>
                    </ul>
                    <Burger />
                </div>

            </div>
        </div>
    )
}

export default Navigation