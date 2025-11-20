import { useRef } from "react";
import Modal from "@components/Modal/Modal";
import RecipeModal from "@pages/home/Recipes/RecipeModal";
import { useDispatch } from "react-redux";
import { addIngredients } from "../../features/ingredients/ingredientSlice";
import { addRecipe } from "../../features/recipes/recipeSlice";
import { addRecipeThunk } from "../../app/middlewares/thunks/addRecipe.Js";

const Recipe = ({children, recipe, toggle, handleToggle}) => {
  const dispatch = useDispatch()
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
      const ingredients = {...recipe, date : inputDateFormated.getTime()}
      dispatch(addRecipeThunk(ingredients))
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