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

	return groups
}