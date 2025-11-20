import { configureStore } from "@reduxjs/toolkit";
import ingredientsSlice from "@features/ingredients/ingredientSlice"
import recipesSlice from "@features/recipes/recipeSlice"
import { loggerMiddleware } from "./middlewares/loggerMiddleware";

export const store = configureStore({
    reducer: {
        ingredients : ingredientsSlice,
        recipes : recipesSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(loggerMiddleware)
})