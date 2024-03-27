export interface IUser {
	email: string
	isActivated: boolean
	id: string
	role: string
}

export interface IAreasOfResp {
	title: string,
	link: string
}

export interface IMember {
	id: number,
	image: string,
	position: string,
	name: string,
	socialLink: string,
	areasOfResp: IAreasOfResp[],
	relatedTo: string
}

export interface INews {
	id: number,
	image: string,
	title: string,
	description: string,
	date: string
}

export interface IGroup {
	title: string,
	data: IMember[],
}