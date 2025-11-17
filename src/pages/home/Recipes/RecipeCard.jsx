import useToggle from "@hooks/useToggle"
import { Link } from "react-router-dom";
import Recipe from "@components/Recipe/Recipe";

const RecipeCard = ({recipe}) => {
  const {toggle, handleToggle} = useToggle(false);
  const toggleModale = (e=null)=>{
    e && e.preventDefault()
    handleToggle()
  }

  return (
    <Recipe toggle={toggle} handleToggle={toggleModale} recipe={recipe}>
      <article>
        <Link className="recipe" to={"/recipe/" + recipe.idMeal}>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <div>
                <h3>
                    {recipe.strMeal}
                </h3>
                <p onClick={toggleModale}>+</p>
            </div>
        </Link>
      </article>
    </Recipe>
  )
}
export default RecipeCard