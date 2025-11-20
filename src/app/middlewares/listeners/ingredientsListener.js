import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { deleteIngredientByRecipe } from "../../../features/ingredients/ingredientSlice";
import { deleteRecipe } from "../../../features/recipes/recipeSlice";

const recipeListener = createListenerMiddleware()

recipeListener.startListening({
    predicate: (action, currentState, previousState)=>{
        return currentState.ingredients.length > 10
    },
    effect: (action, listenerApi)=>{
        console.log("Trop d'ingrédients ajoutés!");
    }
})

recipeListener.startListening({
    matcher:isAnyOf(deleteRecipe),
    effect:(action, listenerApi)=>{
        listenerApi.dispatch(deleteIngredientByRecipe(action.payload))
    }
})


export default recipeListener.middleware