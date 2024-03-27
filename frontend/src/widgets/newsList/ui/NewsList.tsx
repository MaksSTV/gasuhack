import { INews } from '@/shared/types/user.types'
import { useState, useEffect } from 'react'
import "./NewsList.scss"
import axios from 'axios'
import { getNormalDate } from '../utils'
import { NavLink } from 'react-router-dom'



function NewsList() {
	const [news, setNews] = useState<INews[]>([])

	useEffect(() => {
		async function getNews() {
			const { data } = await axios.get<INews[]>('http://localhost:5000/api/news')
			setNews(data)
		};
		getNews()
	}, [])

	return (
		<div className='container_news'>
			<h1 className='newsList__title'>Новости</h1>
			<div className='newsList__list'>
				{
					news.map((item) =>
						<NavLink to={`/news/${item.id}`} key={item.id}>
							<div className='item'>
								<img src={item.image} alt="" className="news_img" />
								<div className="news__header">
									<div className="news_title">{item.title}</div>
									<div className="news_date">{getNormalDate(item.date)}</div>
								</div>
								<div className="news_description">{item.description}</div>
							</div>
						</NavLink>

					)
				}
			</div>
		</div>
	)
}

export default NewsList