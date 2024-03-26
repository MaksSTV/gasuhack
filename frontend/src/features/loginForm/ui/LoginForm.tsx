import { Context } from '@/app/index'
import { observer } from 'mobx-react-lite'
import { useContext, useState } from 'react'


function LoginForm() {

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const { store } = useContext(Context)

	return (
		<>
			<div className="">
				<input
					type="text"
					placeholder='Email'
					value={email}
					onChange={e => setEmail(e.target.value)}
				/>
				<input
					type="password"
					placeholder='пароль'
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>
				<button onClick={() => store.login(email, password)}>
					Логин
				</button>
				<button onClick={() => store.registration(email, password)}>
					Регистрация
				</button>
			</div>
		</>
	)
}

export default observer(LoginForm)