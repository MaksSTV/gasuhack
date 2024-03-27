import { observer } from 'mobx-react-lite'
import "./App.scss"
import { Routes, Route } from 'react-router'
import { Auth } from '@/widgets'
import { Admin, Calendar, Contacts, Footer, Header, Main, News, OnceNews, StudBoard } from '@/pages'
import { Navigate } from 'react-router-dom'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { ruRU } from '@mui/x-date-pickers/locales'
import 'dayjs/locale/ru'

function App() {

	return (
		<>
			<LocalizationProvider
				dateAdapter={AdapterDayjs}
				localeText={ruRU.components.MuiLocalizationProvider.defaultProps.localeText}
				adapterLocale="ru"
			>
				<div className='app'>
					<Header />
					<Routes>
						<Route path='/' element={<Main />} />
						<Route path='/news' element={<News />} />
						<Route path='/studboard' element={<StudBoard />} />
						<Route path='/news/:id' element={<OnceNews />} />
						<Route path='/auth' element={<Auth />} />
						<Route path='/admin' element={<Admin />} />
						<Route path='/calendar' element={<Calendar />} />
						<Route path='/contacts' element={<Contacts />} />
						<Route
							path="*"
							element={<Navigate to="/" replace />}
						/>
					</Routes>
					<Footer />
				</div>
			</LocalizationProvider>
		</>
	)
}

export default observer(App)