import { configureStore } from "@reduxjs/toolkit";
import ingredientsSlice from "@features/ingredients/ingredientSlice"
import recipesSlice from "@features/recipes/recipeSlice"
import { loggerMiddleware } from "./middlewares/loggerMiddleware";
import recipeListener from "./middlewares/listeners/ingredientsListener"
import { theMealDbApi } from "../services/theMealDbApi";

export const store = configureStore({
    reducer: {
        ingredients : ingredientsSlice,
        recipes : recipesSlice,
        [theMealDbApi.reducerPath] : theMealDbApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().prepend(recipeListener).concat(theMealDbApi.middleware, loggerMiddleware)
})