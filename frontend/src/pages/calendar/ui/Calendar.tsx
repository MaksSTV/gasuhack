import { Calendar, dayjsLocalizer } from 'react-big-calendar'
import dayjs from 'dayjs'
import "./calendar.scss"
import { events } from '../events'
const localizer = dayjsLocalizer(dayjs)

function calendar() {

    return (
        <div className='container_calendar'>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
            />
        </div>
    )
}

export default calendar