import { addIngredients } from "../../../features/ingredients/ingredientSlice"
import { addRecipe } from "../../../features/recipes/recipeSlice"

export const addRecipeThunk = recipe => (dispatch, getState) => {
    dispatch(addRecipe(recipe))    
    const idRecipe = getState().recipes[getState().recipes.length - 1].extendedProps.id
    dispatch(addIngredients({...recipe, idRecipe}))
}