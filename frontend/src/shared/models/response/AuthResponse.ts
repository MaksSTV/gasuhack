import { IUser } from '@/shared/types/user.types'

export interface AuthResponse {
	accessToken: string
	refreshToken: string
	user: IUser
}