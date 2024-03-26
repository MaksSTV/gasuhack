import { useContext, useEffect, useState } from 'react'
import { observer } from "mobx-react-lite"
import UserService from '@/shared/services/UserService'
import { Context } from '@/app/index'
import { IUser } from '@/shared/types/user.types'
import { LoginForm } from '@/features'


function Auth() {

	const { store } = useContext(Context)
	const [users, setUsers] = useState<IUser[]>([])

	useEffect(() => {
		if (localStorage.getItem('token')) {
			store.checkAuth()
		}
	}, [])

	async function getUsers() {
		try {
			const response = await UserService.fetchUsers()
			setUsers(response.data)
		} catch (e) {

		}
	}

	if (store.isLoading) {
		return (
			<div>Загрузка...</div>
		)
	}

	if (!store.isAuth) {
		return (
			<div>
				<LoginForm />
				<button onClick={getUsers}>Получить пользователей</button>
			</div>
		)
	}

	return (
		<>
			<div>
				<h1>
					{
						store.isAuth ? `Пользователь авторизован ${store.user.email}` : "Авторизуйтесь"
					}
				</h1>
				<h1>
					{
						store.user.isActivated ? `Аккаунт подтвержден по почте` : "Подтвердите аккаунт"
					}
				</h1>
				<button onClick={() => store.logout()}>Выйти</button>
				<div>
					<button onClick={getUsers}>Получить пользователей</button>
				</div>
				{
					users.map(user =>
						<div key={user.email}>{user.email}</div>
					)
				}
			</div>
		</>
	)
}

export default observer(Auth)