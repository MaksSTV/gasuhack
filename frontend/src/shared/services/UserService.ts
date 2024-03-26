import api from '@/app/http'
import { AxiosResponse } from 'axios'
import { IUser } from '../types/user.types'


export default class UserService {
	static fetchUsers(): Promise<AxiosResponse<IUser[]>> {
		return api.get<IUser[]>('/users')
	}
}