import { observer } from 'mobx-react-lite'
import "./App.scss"
import { Routes, Route } from 'react-router'
import { Auth } from '@/widgets'
import { Footer, Header, Main, News, StudBoard } from '@/pages'
import { Navigate } from 'react-router-dom'

function App() {

	return (
		<>
			<div className='app'>
				<Header />
				<Routes>
					<Route path='/' element={<Main />} />
					<Route path='/news' element={<News />} />
					<Route path='/studboard' element={<StudBoard />} />
					<Route path='/auth' element={<Auth />} />
					<Route
						path="*"
						element={<Navigate to="/" replace />}
					/>
				</Routes>
				<Footer />
			</div>
		</>
	)
}

export default observer(App)