import { configureStore } from "@reduxjs/toolkit";
import ingredientsSlice from "@features/ingredients/ingredientSlice"
import recipesSlice from "@features/recipes/recipeSlice"

export const store = configureStore({
    reducer: {
        ingredients : ingredientsSlice,
        recipes : recipesSlice
    }
})