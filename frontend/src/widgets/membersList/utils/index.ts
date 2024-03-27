import { IMember } from '@/shared/types/user.types'

export function distributeIntoGroups(data: IMember[]) {

	type GroupedData = Record<string, IMember[]>

	const groupedData: GroupedData = {}

	data.forEach(item => {
		if (!groupedData[item.relatedTo]) {
			groupedData[item.relatedTo] = []
		}
		groupedData[item.relatedTo].push(item)
	})

	const titles: Record<string, string> = {
		upper: "Главный отдел",
		department: "Отделы",
		faculty: "Председатели факультетов",
		project: "Проекты"
		// Добавьте другие названия по желанию
	}

	const groups = Object.keys(groupedData).map(key => ({
		title: titles[key] || key,
		data: groupedData[key]
	}))

	const order: Record<keyof typeof titles, number> = {
		upper: 1,
		department: 2,
		faculty: 3,
		project: 4
	}

	// Создаем новый массив групп, упорядоченный в соответствии с порядком
	const orderedGroups = Object.keys(order)
		.filter(key => groups.some(group => group.title === titles[key]))
		.sort((a, b) => order[a as keyof typeof order] - order[b as keyof typeof order])
		.map(key => groups.find(group => group.title === titles[key]))

	console.log(orderedGroups)
	return orderedGroups
}