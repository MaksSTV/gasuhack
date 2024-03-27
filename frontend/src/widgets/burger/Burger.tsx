import { useRef } from "react"
import { motion, useCycle } from "framer-motion"
import { NavMobile } from './navMobile/NavMobile'
import { MenuToggle } from './menuToggle/MenuToggle'
import { useDimensions } from './hooks/useDimensions'

const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(25px at 55px 31px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
}

export const Burger = () => {
    const [isOpen, toggleOpen] = useCycle(false, true)
    const containerRef = useRef(null)
    const { height } = useDimensions(containerRef)


    return (
        <div className="burger">
            <motion.nav
                initial={false}
                animate={isOpen ? "open" : "closed"}
                custom={height}
                ref={containerRef}
            >
                <motion.div className="background" variants={sidebar} />
                <NavMobile />
                <MenuToggle toggle={() => toggleOpen()} />
            </motion.nav>
        </div>
    )
}