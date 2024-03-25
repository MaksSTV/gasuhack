import { Outlet } from 'react-router-dom'
import classes from "./App.module.scss"

export const App = () => {
	return (
		<>
			<div className={classes.hello}>
				Hello world
			</div>
			<Outlet />
		</>
	)
}