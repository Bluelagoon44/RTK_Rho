import { createListenerMiddleware, current, isAnyOf } from "@reduxjs/toolkit";
import { deleteIngredientByRecipe } from "../../../features/ingredients/ingredientSlice";
import { addRecipe, deleteRecipe } from "../../../features/recipes/recipeSlice";

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

recipeListener.startListening({
    actionCreator:addRecipe,
    effect:(action, listenerApi)=>{
        const recipes = listenerApi.getState().recipes
        const formatDate = (timestamp) => new Date(timestamp).toISOString().split("T")[0]
        const dateRecipeAdded = formatDate(action.payload.date)
        const nbRecipes = recipes.filter((recipe)=>
            recipe.title === action.payload.strMeal && formatDate(recipe.date)===dateRecipeAdded
        ).length
        if(nbRecipes > 1) console.log("Vous exagérez quand même...");
    }
})

export default recipeListener.middleware