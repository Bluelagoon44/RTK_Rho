import { useDispatch, useSelector } from "react-redux"
import "./courses.css"
import { filterIngredientsByDate } from "../../features/ingredients/ingredientSelectors";
import { useRef, useState } from "react";
import { deleteIngredient, editIngredient } from "../../features/ingredients/ingredientSlice";

const Courses = () => {
  const ingredients = useSelector((state)=>filterIngredientsByDate(state))
  const [ingredientToEdit, setIngredientToEdit] = useState(null)
  const dispatch = useDispatch()
  const dateInput = useRef(null)
  const quantityInput = useRef(null)

  const editIngredientUI = (id)=>{
    if(id === ingredientToEdit){
      const inputDateFormated = new Date(dateInput.current.value);
      const newIngredient = {
        id,
        quantity: quantityInput.current.value,
        date: inputDateFormated.getTime()
      }
      dispatch(editIngredient(newIngredient))
      setIngredientToEdit(null)
    }
    else{
      setIngredientToEdit(id)
    }
  }

  const deleteIngredientUI = (id)=>{
    dispatch(deleteIngredient(id))
  }
  
  return (
    <div className="ingredients">
      {ingredients.map((ingredient)=>(
        <article key={ingredient.id} className="ingredient">
          <h2>{ingredient.name}</h2>
          <p>
            <strong>Quantité :</strong> 
            {ingredient.id === ingredientToEdit ? <input ref={quantityInput} type="text" defaultValue={ingredient.quantity} /> : ingredient.quantity}
          </p>
          <p><strong>Recette :</strong> {ingredient.recipe}</p>
          <p>
            <strong>Date de consommation :</strong> 
            {ingredient.id === ingredientToEdit ? <input ref={dateInput} type="date" defaultValue={new Date(ingredient.date).toISOString().split("T")[0]} /> : new Date(ingredient.date).toLocaleDateString().split("T")[0]}
          </p>
          <div>
            <button onClick={()=>{editIngredientUI(ingredient.id)}}>Edit</button>
            <button onClick={()=>{deleteIngredientUI(ingredient.id)}}>X</button>
          </div>
        </article>
      ))}
    </div>
  )
}
    
export default Courses