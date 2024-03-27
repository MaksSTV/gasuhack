import AdminNews from './news/AdminNews'
import AdminStudboard from './studboard/AdminStudboard'
import "./AuthPanel.scss"

function AdminPanel() {


	return (
		<div className='container_panel'>
			<h1>Админ панель</h1>
			<AdminNews />
			<AdminStudboard />
		</div>
	)
}

export default AdminPanel