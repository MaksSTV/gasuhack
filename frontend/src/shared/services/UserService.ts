import api from '@/app/http'
import { AxiosResponse } from 'axios'
import { IUser } from '../types/user.types'


export default class UserService {
	static fetchUsers(): Promise<AxiosResponse<IUser[]>> {
		return api.get<IUser[]>('/users')
	}

	static delMembers(id: string) {
		return api.delete('/studboard/' + id)
	}

	static addPhoto(file: File) {
		console.log(file)
		const formData = new FormData()
		formData.append("files", file)
		console.log(formData)
		return api.post('/uploadFile', {
			formData
		})
	}
}