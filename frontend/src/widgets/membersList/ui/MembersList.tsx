import { IMember } from '@/shared/types/user.types'
import axios from 'axios'
import { useEffect, useState } from 'react'

function MembersList() {
	const [members, setMembers] = useState<IMember[]>([])

	useEffect(() => {
		async function getMembers() {
			const { data } = await axios.get<IMember[]>('http://localhost:5000/api/studboard')
			setMembers(data)
		};
		getMembers()
	}, [])

	return (
		<div className='container_main'>

		</div>
	)
}

export default MembersList