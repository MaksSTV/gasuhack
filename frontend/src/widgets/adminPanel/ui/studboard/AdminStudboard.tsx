import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, styled, ButtonProps, MenuItem, Select, SelectChangeEvent, FormControl, InputLabel, Grid, Container, Stack } from '@mui/material'
import { useState } from 'react'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { IMember } from '@/shared/types/user.types'
import axios from 'axios'
import UserService from '@/shared/services/UserService'

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
	color: '#ffffff;',
	backgroundColor: '#7994c2;',
	'&:hover': {
		backgroundColor: '#7994c2;',
	},
	fontSize: "16px",
	fontFamily: "Open Sans Condensed"
}))

const VisuallyHiddenInput = styled('input')({
	clip: 'rect(0 0 0 0)',
	clipPath: 'inset(50%)',
	height: 1,
	overflow: 'hidden',
	position: 'absolute',
	bottom: 0,
	left: 0,
	whiteSpace: 'nowrap',
	width: 1,
})

const InputFileUpload = () => {
	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files[0]
		console.log(file)
		const formData = new FormData()
		formData.append("file", file)
		console.log(formData) // Доступ к загруженному файлу
	}

	const [imageUrl, setImageUrl] = useState(null)

	const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
		console.log(event)
		const file = event.target.files[0]
		console.log(file)
		const reader = new FileReader()

		reader.onloadend = () => {
			console.log(reader.result)
			//setImageUrl(reader.result)
		}

		reader.readAsDataURL(file)
	}

	return (
		<>
			<Container maxWidth="md" sx={{ mt: 8 }}>
				<Stack direction="row" alignItems="center" spacing={2}>
					<label htmlFor="upload-image">
						<Button variant="contained" component="span">
							Upload
						</Button>
						<input
							id="upload-image"
							hidden
							accept="image/*"
							type="file"
							onChange={handleFileUpload}
						/>
					</label>
					{imageUrl && <img src={imageUrl} alt="Uploaded Image" height="300" />}
				</Stack>
			</Container>
		</>
	)
}

function AdminStudboard() {
	const [openStudboard, setOpenStudboard] = useState(false)

	const [openStudboardAdd, setOpenStudboardAdd] = useState(false)
	const [openStudboardDel, setOpenStudboardDel] = useState(false)
	const [openStudboardEdit, setOpenStudboardEdit] = useState(false)

	const [members, setMembers] = useState<IMember[]>([])

	const handleClickOpenStudboard = () => {
		setOpenStudboard(true)
	}

	const handleCloseStudboard = () => {
		setOpenStudboard(false)
	}



	const handleClickOpenAdd = () => {
		setOpenStudboardAdd(true)
	}

	const handleCloseAdd = () => {
		setOpenStudboardAdd(false)
	}

	const handleClickOpenDel = () => {
		setOpenStudboardDel(true)
		async function getMembers() {
			const { data } = await axios.get<IMember[]>('http://localhost:5000/api/studboard')
			setMembers(data)
		};
		getMembers()
	}

	const handleCloseDel = () => {
		setOpenStudboardDel(false)
	}

	const handleClickOpenEdit = () => {
		setOpenStudboardEdit(true)
	}

	const handleCloseEdit = () => {
		setOpenStudboardEdit(false)
	}

	const [relatedTo, setRelatedTo] = useState('Главный отдел')

	const handleChange = (event: SelectChangeEvent) => {
		setRelatedTo(event.target.value as string)
	}

	const [areas, setAreas] = useState([{ title: '', link: '' }])

	const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
		const newAreas = [...areas]
		newAreas[index].title = event.target.value
		setAreas(newAreas)
	}

	const handleLinkChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
		const newAreas = [...areas]
		newAreas[index].link = event.target.value
		setAreas(newAreas)
	}

	const handleAddArea = () => {
		setAreas([...areas, { title: '', link: '' }])
	}

	const handleRemoveArea = (index: number) => {
		const newAreas = [...areas]
		newAreas.splice(index, 1)
		setAreas(newAreas)
	}

	const [delName, setDelName] = useState('')

	const handleChangeDelActions = (event: SelectChangeEvent) => {
		console.log(event)
		const selectedId = event.target.value
		const foundMember = members.find(member => member.id === Number(selectedId))
		console.log(foundMember)
		setDelName(selectedId)
	}

	const handleDelActions = () => {
		UserService.delMembers(delName)
	}


	return (
		<> <ColorButton variant="contained" onClick={handleClickOpenStudboard}>
			Студсовет
		</ColorButton>
			<Dialog
				open={openStudboard}
				onClose={handleCloseStudboard}
				maxWidth="sm"
				fullWidth={true}
			>
				<DialogTitle>Редактор студсовета</DialogTitle>
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
						open={openStudboardAdd}
						PaperProps={{
							component: 'form',
							onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
								event.preventDefault()
								const formData = new FormData(event.currentTarget)
								const formJson = Object.fromEntries((formData as any).entries())
								const obj = {
									...formJson,
									areasOfResp: areas,
									relatedTo: relatedTo,
								}
								console.log(obj)
								//handleCloseAdd()
							},
						}}
					>
						<DialogTitle>Добавление</DialogTitle>
						<DialogContent>
							<DialogContentText>
								Заполните все поля, чтобы добавить нового члена студсовета
							</DialogContentText>
							<TextField
								autoFocus
								required
								margin="dense"
								id="name"
								name="name"
								label="Имя Фамилия"
								type="text"
								fullWidth
								variant="standard"
							/>
							<TextField
								required
								margin="dense"
								id="position"
								name="position"
								label="Должность"
								type="text"
								fullWidth
								variant="standard"
							/>
							<TextField
								required
								margin="dense"
								id="socialLink"
								name="socialLink"
								label="Ссылка на социальную сеть"
								type="text"
								fullWidth
								variant="standard"
							/>
							<FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
								<InputLabel id="demo-simple-select-standard-label">Роль</InputLabel>
								<Select
									labelId="demo-simple-select-label"
									id="demo-simple-select"
									value={relatedTo}
									label="Роль"
									onChange={handleChange}
								>
									<MenuItem value='upper'>Главный отдел</MenuItem>
									<MenuItem value='department'>Отделы</MenuItem>
									<MenuItem value='faculty'>Председатели факультетов</MenuItem>
									<MenuItem value='project'>Проекты</MenuItem>
								</Select>
							</FormControl>
							<div>
								Зоны ответственности
								{areas.map((area, index) => (
									<Grid container spacing={2} key={index}>
										<Grid item xs={4}>
											<TextField
												fullWidth
												label="Название"
												value={area.title}
												onChange={(event) => handleTitleChange(event, index)}
											/>
										</Grid>
										<Grid item xs={4}>
											<TextField
												fullWidth
												label="Ссылка"
												value={area.link}
												onChange={(event) => handleLinkChange(event, index)}
											/>
										</Grid>
										<Grid item xs={2}>
											<ColorButton style={{ width: '150px' }} onClick={() => handleRemoveArea(index)}>Удалить пару</ColorButton>
										</Grid>
									</Grid>
								))}
								<ColorButton
									style={{ width: '150px', margin: '10px 0' }}
									onClick={handleAddArea}>Добавить зону</ColorButton>
							</div>
							<InputFileUpload />
						</DialogContent>
						<DialogActions>
							<ColorButton variant="contained" onClick={handleCloseAdd}>Закрыть</ColorButton>
							<ColorButton variant="contained" type="submit">Добавить</ColorButton>
						</DialogActions>
					</Dialog>
					<Dialog
						open={openStudboardDel}
					>
						<DialogTitle>Удаление</DialogTitle>
						<DialogContent>
							<DialogContentText>
								Выберите члена студсовета, которого нужно удалить
							</DialogContentText>
							<FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
								<InputLabel id="demo-simple-select-standard-label">Член студсовета</InputLabel>
								<Select
									labelId="demo-simple-select-label"
									id="demo-simple-select"
									value={delName}
									label="Член студсовета"
									onChange={(event) => handleChangeDelActions(event)}
								>
									{members.map((member) => (
										<MenuItem key={member.id} value={String(member.id)}>{member.name}</MenuItem>
									))}
								</Select>
							</FormControl>
						</DialogContent>
						<DialogActions>
							<ColorButton variant="contained" onClick={handleCloseDel}>Закрыть</ColorButton>
							<ColorButton variant="contained" onClick={handleDelActions}>Удалить</ColorButton>
						</DialogActions>
					</Dialog>
					<Dialog
						open={openStudboardEdit}
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
					<ColorButton variant="contained" onClick={handleCloseStudboard}>Закрыть</ColorButton>
				</DialogActions>
			</Dialog></>
	)
}

export default AdminStudboard