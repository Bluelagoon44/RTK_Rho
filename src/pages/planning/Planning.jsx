import dayGridPlugin from '@fullcalendar/daygrid'
import FullCalendar from "@fullcalendar/react"
import "./planning.css"

const Planning = () => {
  return (
    <div className="fullCalendarContainer">
      <FullCalendar 
        plugins={[ dayGridPlugin ]} 
        initialView="dayGridMonth" 
        headerToolbar={{
          left: 'title',
          center: '',
          right: 'prev,next today'
        }}
        selectable={true}
        editable={true}
        height="auto"
      />
    </div>
  )
}

export default Planning