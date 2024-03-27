import { INews } from '@/shared/types/user.types'
import { getNormalDate } from '@/widgets/newsList/utils'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


function OnceNews() {
	const { id } = useParams() as { id: string }
	const navigate = useNavigate()
	const [onceNew, setOnceNew] = useState<INews>()

	useEffect(() => {
		async function getOneNews() {
			const { data } = await axios.get<INews>(`http://localhost:5000/api/news/${id}`)
			setOnceNew(data)
		};
		getOneNews()
	}, [])

	return (
		<>
			{
				onceNew ?
					<div className="container_news">
						<button onClick={() => navigate(-1)}>Назад</button>
						<div className='item'>
							<img src={onceNew.image} alt="" className="news_img" />
							<div className="news__header">
								<div className="news_title">{onceNew.title}</div>
								<div className="news_date">{getNormalDate(onceNew.date)}</div>
							</div>
							<div className="news_description">{onceNew.description}</div>
						</div>
					</div>

					: <div>Загрузка...</div>
			}

		</>
	)
}

export default OnceNews