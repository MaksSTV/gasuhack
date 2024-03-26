import { observer } from 'mobx-react-lite'
import classes from "./App.module.scss"
import { Routes, Route } from 'react-router'
import { LazyAbout } from '../components/About/LazyAbout'
import { Suspense } from 'react'
import { Auth } from '@/widgets'

function App() {

	return (
		<>
			<div className="app">
				<header>header</header>
				<Routes>
					<Route path='/' element={<Suspense fallback={'Loading...'}><LazyAbout /></Suspense>} />
					<Route path='/auth' element={<Auth />} />
				</Routes>
				<footer>footer</footer>
			</div>
		</>
	)
}

export default observer(App)