import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, styled, ButtonProps } from '@mui/material'
import { useState } from 'react'


function AdminNews() {
	const [openNews, setOpenNews] = useState(false)

	const [openNewsAdd, setOpenNewsAdd] = useState(false)
	const [openNewsDel, setOpenNewsDel] = useState(false)
	const [openNewsEdit, setOpenNewsEdit] = useState(false)

	const handleClickOpenNews = () => {
		setOpenNews(true)
	}

	const handleCloseNews = () => {
		setOpenNews(false)
	}



	const handleClickOpenAdd = () => {
		setOpenNewsAdd(true)
	}

	const handleCloseAdd = () => {
		setOpenNewsAdd(false)
	}

	const handleClickOpenDel = () => {
		setOpenNewsDel(true)
	}

	const handleCloseDel = () => {
		setOpenNewsDel(false)
	}

	const handleClickOpenEdit = () => {
		setOpenNewsEdit(true)
	}

	const handleCloseEdit = () => {
		setOpenNewsEdit(false)
	}

	const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
		color: '#ffffff;',
		backgroundColor: '#7994c2;',
		'&:hover': {
			backgroundColor: '#7994c2;',
		},
		fontSize: "16px",
		fontFamily: "Open Sans Condensed"
	}))

	return (
		<> <ColorButton variant="contained" onClick={handleClickOpenNews}>
			Новости
		</ColorButton>
			<Dialog
				open={openNews}
				onClose={handleCloseNews}
				maxWidth="sm"
				fullWidth={true}
			>
				<DialogTitle>Редактор новостей</DialogTitle>
				<DialogContent className='btns__container'>
					<ColorButton variant="contained" onClick={handleClickOpenAdd}>
						Добавить
					</ColorButton>
					<ColorButton variant="contained" onClick={handleClickOpenDel}>
						Удалить
					</ColorButton>
					<ColorButton variant="contained" onClick={handleClickOpenEdit}>
						Изменить
					</ColorButton>
					<Dialog
						open={openNewsAdd}
						onClose={handleCloseAdd}
					>
						<DialogTitle>Добавление</DialogTitle>
						<DialogContent>

						</DialogContent>
						<DialogActions>
							<ColorButton variant="contained" onClick={handleCloseAdd}>Закрыть</ColorButton>
						</DialogActions>
					</Dialog>
					<Dialog
						open={openNewsDel}
						onClose={handleCloseDel}
					>
						<DialogTitle>Удаление</DialogTitle>
						<DialogContent>

						</DialogContent>
						<DialogActions>
							<ColorButton variant="contained" onClick={handleCloseDel}>Закрыть</ColorButton>
						</DialogActions>
					</Dialog>
					<Dialog
						open={openNewsEdit}
						onClose={handleCloseEdit}
					>
						<DialogTitle>Редактирование</DialogTitle>
						<DialogContent>

						</DialogContent>
						<DialogActions>
							<ColorButton variant="contained" onClick={handleCloseEdit}>Закрыть</ColorButton>
						</DialogActions>
					</Dialog>
				</DialogContent>
				<DialogActions>
					<ColorButton variant="contained" onClick={handleCloseNews}>Закрыть</ColorButton>
				</DialogActions>
			</Dialog></>
	)
}

export default AdminNews