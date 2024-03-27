import "./Main.scss"

function Main() {
	return (
		<div className='container_main'>
			<div className="firstScreen">
				<h1 className="title">Студенческий совет</h1>
				<div className="firstScreen__content">
					<div className="firstScreen__left">
						<img src="https://storage.yandexcloud.net/studboard-bucket/firstScreen.png" alt="" className="firstScreen__img" />
						<h2 className="img__subtitle">Приветственное слово председателя</h2>
					</div>
					<div className="firstScreen__right">
						<p className='firstScreen__text'>
							Студенческий совет – для студентов!
						</p>
						<p className='firstScreen__text'>
							Студенческий совет – орган студенческого самоуправления. Уже много лет студенческий совет СПбГАСУ работает и осуществляет свою миссию: создаёт возможности, развивает среду и объединяет людей!
							Именно здесь ты можешь найти круг единомышленников, реализовать свою инициативу и создать возможности для других. Попробуй себя в разных сферах студенческой жизни вместе со студенческим советом СПбГАСУ!
						</p>
						<br />
						<p className='firstScreen__text'>
							Леонид Николаев
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Main