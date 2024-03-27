export interface IUser {
	email: string
	isActivated: boolean
	id: string
}

export interface IAreasOfResp {
	title: string,
	link: string
}

export interface IMember {
	id: number,
	image: string,
	name: string,
	socialLink: string,
	areasOfResp: IAreasOfResp[],
	relatedTo: string
}