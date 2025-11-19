import dayGridPlugin from '@fullcalendar/daygrid'
import FullCalendar from "@fullcalendar/react"
import "./planning.css"
import { useDispatch, useSelector } from 'react-redux'
import useToggle from '../../hooks/useToggle'
import Modal from "@components/Modal/Modal"
import {deleteRecipe} from "@features/recipes/recipeSlice"
import { useState } from 'react'

const Planning = () => {
  const events = useSelector((state)=>state.recipes)
  const {toggle, handleToggle} = useToggle(false)
  const dispatch = useDispatch()
  const [idRecipe, setIdRecipe] = useState(null)

  const showEvent = (e)=>{
    setIdRecipe(e.event._def.extendedProps.id)
    handleToggle()
  }
  const deleteEvent = ()=>{
    dispatch(deleteRecipe(idRecipe));
    handleToggle()
  }
  return (
    <div className="fullCalendarContainer">
      <FullCalendar 
        plugins={[ dayGridPlugin ]}
        events={events}
        initialView="dayGridMonth" 
        headerToolbar={{
          left: 'title',
          center: '',
          right: 'prev,next today'
        }}
        eventClick={showEvent}
        selectable={true}
        editable={true}
        height="auto"
      />
      {toggle &&
        <Modal handleToggle={handleToggle}>
          <p>Êtes-vous sûr de vouloir supprimer votre merveilleuse recette ?</p>
          <button onClick={deleteEvent}>Oui</button>
          <button onClick={handleToggle}>Non</button>
        </Modal>
      }
    </div>
  )
}
export default Planning