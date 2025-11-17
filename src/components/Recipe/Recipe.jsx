import { useRef } from "react";
import Modal from "@components/Modal/Modal";
import RecipeModal from "@pages/home/Recipes/RecipeModal";

const Recipe = ({children, recipe, toggle, handleToggle}) => {
  const dateInput = useRef();
  const addToCalendar = (e)=>{
    e.preventDefault();
    const date = new Date();
    const nextWeek = new Date();
    nextWeek.setDate(date.getDate() + 7)
    const inputDateFormated = new Date(dateInput.current.value);
    if(inputDateFormated.getTime() > nextWeek.getTime() || inputDateFormated.getTime() < date.getTime()){
      console.log("Date incorrecte");
    }
    else{
      handleToggle();
    }
  }
  
  return (
    <>
      {children}
      {toggle ? 
        <Modal handleToggle={handleToggle}>
          <RecipeModal recipe={recipe} addToCalendar={addToCalendar} dateInput={dateInput} />
        </Modal>
      : null}
    </>
  )
}
export default Recipe