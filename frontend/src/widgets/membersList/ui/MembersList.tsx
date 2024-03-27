import { IGroup, IMember, INews } from '@/shared/types/user.types'
import axios from 'axios'
import { useEffect, useState } from 'react'
import "./MembersList.scss"
import { distributeIntoGroups } from '../utils'

const data = [
	{
		id: 1,
		image: "1234.png",
		position: "Председатель студсовета СПбГАСУ",
		name: "Леонид Николаев",
		socialLink: "https://vk.com/lenchik200",
		areasOfResp: [
			{
				title: "Студенческий совет СПбГАСУ",
				link: "https://vk.com/ssspbgasu"
			}
		],
		relatedTo: "upper"
	},
	{
		id: 2,
		image: "https://storage.yandexcloud.net/studboard-bucket/member1.png",
		position: "Председатель студсовета СПбГАСУ",
		name: "Леонид Николаев",
		socialLink: "https://vk.com/lenchik200",
		areasOfResp: [
			{
				title: "Студенческий совет СПбГАСУ",
				link: "https://vk.com/ssspbgasu"
			},
			{
				title: "Студенческий совет СПбГАСУ",
				link: "https://vk.com/ssspbgasu"
			},
			{
				title: "Студенческий совет СПбГАСУ",
				link: "https://vk.com/ssspbgasu"
			}
		],
		relatedTo: "middle"
	},
	{
		id: 3,
		image: "1234.png",
		position: "Председатель студсовета СПбГАСУ",
		name: "Леонид Николаев",
		socialLink: "https://vk.com/lenchik200",
		areasOfResp: [
			{
				title: "Студенческий совет СПбГАСУ",
				link: "https://vk.com/ssspbgasu"
			}
		],
		relatedTo: "bottom"
	},
	{
		id: 4,
		image: "https://storage.yandexcloud.net/studboard-bucket/member1.png",
		position: "Председатель студсовета СПбГАСУ",
		name: "Леонид Николаев",
		socialLink: "https://vk.com/lenchik200",
		areasOfResp: [
			{
				title: "Студенческий совет СПбГАСУ",
				link: "https://vk.com/ssspbgasu"
			}
		],
		relatedTo: "upper"
	},
	{
		id: 5,
		image: "1234.png",
		position: "Председатель студсовета СПбГАСУ",
		name: "Леонид Николаев",
		socialLink: "https://vk.com/lenchik200",
		areasOfResp: [
			{
				title: "Студенческий совет СПбГАСУ",
				link: "https://vk.com/ssspbgasu"
			}
		],
		relatedTo: "upper"
	},
	{
		id: 6,
		image: "1234.png",
		position: "Председатель студсовета СПбГАСУ",
		name: "Леонид Николаев",
		socialLink: "https://vk.com/lenchik200",
		areasOfResp: [
			{
				title: "Студенческий совет СПбГАСУ",
				link: "https://vk.com/ssspbgasu"
			}
		],
		relatedTo: "upper"
	},
	{
		id: 7,
		image: "1234.png",
		position: "Председатель студсовета СПбГАСУ",
		name: "Леонид Николаев",
		socialLink: "https://vk.com/lenchik200",
		areasOfResp: [
			{
				title: "Студенческий совет СПбГАСУ",
				link: "https://vk.com/ssspbgasu"
			}
		],
		relatedTo: "upper"
	},
]


function MembersList() {
	const [members, setMembers] = useState<IMember[]>([])
	//const [news, setNews] = useState<INews[]>([])
	const [groups, setGroups] = useState<IGroup[]>([])

	useEffect(() => {
		async function getMembers() {
			const { data } = await axios.get<IMember[]>('http://localhost:5000/api/studboard')
			setMembers(data)
		};
		getMembers()

	}, [])

	useEffect(() => {
		setGroups(distributeIntoGroups(members))
	}, [members])

	return (
		<div className='container_members'>
			<h1 className='membersList__title'>Состав студсовета</h1>
			<div className="groups">
				{
					groups.map((group, index) =>
						<div className="group" key={index}>
							<h2 className='group__title'>{group.title}</h2>
							<div className='membersList__list'>
								{
									group.data.map(member =>
										<div key={member.id} className='member'>
											<div className="member__top">
												{member.image != "1234.png"
													? <img src={member.image} alt="" className='defaultImg' />
													: <img src='https://storage.yandexcloud.net/studboard-bucket/defaultImg.jpg' alt="" className='defaultImg' />
												}
												<div className="member__content">
													<a
														href={member.socialLink}
														className="member__name"
													>
														{member.name}
													</a>
													<div className="member__position">{member.position}</div>
												</div>
											</div>
											<div className="member__bottom">
												{member.areasOfResp.map((area, index) =>
													<div key={index}>
														<a href={area.link} className="member__area">{area.title}</a>
													</div>
												)}</div>

										</div>
									)
								}
							</div>
						</div>
					)
				}
			</div>

		</div>
	)
}

export default MembersList