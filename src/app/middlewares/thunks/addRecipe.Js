import { addIngredients } from "../../../features/ingredients/ingredientSlice"
import { addRecipe } from "../../../features/recipes/recipeSlice"

export const addRecipeThunk = recipe => dispatch => {
    dispatch(addRecipe(recipe))
    dispatch(addIngredients(recipe))
}