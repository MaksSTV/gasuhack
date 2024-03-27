import { motion } from "framer-motion"
import { Link } from 'react-router-dom'

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
}


export const MenuItemMobile = () => {

  return (
    <motion.ul
      className="nav__list--mobile"
      variants={variants}
      whileTap={{ scale: 0.95 }}
    >
      <li className="nav__list-item--mobile"><Link className="nav__list-link" to='/'>Главная</Link></li>
      <li className="nav__list-item--mobile"><Link className="nav__list-link" to='/news'>Новости</Link></li>
      <li className="nav__list-item--mobile"><Link className="nav__list-link" to='/calendar'>Календарь</Link></li>
      <li className="nav__list-item--mobile"><Link className="nav__list-link" to='/studboard'>Состав</Link></li>
      <li className="nav__list-item--mobile"><Link className="nav__list-link" to='/contacts'>Связаться с нами</Link></li>
    </motion.ul>
  )
}