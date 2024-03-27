import { useContext, useEffect } from 'react'
import { observer } from "mobx-react-lite"
import { Context } from '@/app/index'
import { LoginForm } from '@/features'
import "./Auth.scss"

function Auth() {

	const { store } = useContext(Context)

	useEffect(() => {
		if (localStorage.getItem('token')) {
			store.checkAuth()
		}
	}, [])


	if (store.isLoading) {
		return (
			<div>Загрузка...</div>
		)
	}

	if (!store.isAuth) {
		return (
			<div className='container_auth'>
				<LoginForm />
			</div>
		)
	}

	return (
		<>
			<div className='container_auth'>
				<div className="auth">
					<h1 className='auth__isAuth'>
						{
							store.isAuth ? `Пользователь авторизован ${store.user.email}` : "Авторизуйтесь"
						}
					</h1>
					<h1 className='auth__isActivated'>
						{
							store.user.isActivated ? `Аккаунт подтвержден по почте` : "Подтвердите аккаунт на своей почте"
						}
					</h1>
					<button
						onClick={() => store.logout()}
						className='btnForm'
					>Выйти</button>
				</div>
			</div>
		</>
	)
}

export default observer(Auth)