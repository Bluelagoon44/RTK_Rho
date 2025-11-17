import RecipeCard from "./RecipeCard"
import "./recipes.css"

const Recipes = ({result}) => {   
    return result ? 
     (
        <div id="recipes">
            {result.data ?
                result.data.meals !== null && result.data.meals.length > 0 ?
                    result.data?.meals.map((recipe)=>(
                        <RecipeCard recipe={recipe} key={recipe.idMeal} />
                    ))
                : "Aucun résultat trouvé"
            : result.isLoading ?
                "Loading..."
            : result.isError ?
                "Error"
            : null
            }
        </div>
    ) : <></>
}

export default Recipes