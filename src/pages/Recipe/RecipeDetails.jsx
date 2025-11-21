import useToggle from "@hooks/useToggle"
import { useParams } from "react-router-dom"
import "./recipeDetails.css"
import Recipe from "../../components/Recipe/Recipe"
import { Link } from "react-router-dom"
import { useGetRecipeByIdQuery } from "../../services/theMealDbApi"

const RecipeDetails = () => {
    const {idRecipe} = useParams()
    const {toggle, handleToggle} = useToggle(false);
    const recipe = useGetRecipeByIdQuery(idRecipe)

    return !recipe ? 
            <p>Loading...</p>
        :
            recipe?.data ?
                (
                    <Recipe toggle={toggle} handleToggle={handleToggle} recipe={recipe.data.meals[0]}>
                        <div id="recipe">
                            <img src={recipe.data.meals[0].strMealThumb} />
                            <aside>
                                <div>
                                    <Link to="/">{"<"} Retour</Link>
                                    <h2>{recipe.data.meals[0].strMeal}</h2>
                                    <p id="openModale" onClick={handleToggle}>+ Ajouter au planning</p>
                                </div>
                                <p>{recipe.data.meals[0].strInstructions}</p>
                            </aside>
                        </div>
                    </Recipe>
                )
            :
                <p>{recipe.error}</p>
}
export default RecipeDetails