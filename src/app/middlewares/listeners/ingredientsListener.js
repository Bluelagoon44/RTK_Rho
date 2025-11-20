import { createListenerMiddleware } from "@reduxjs/toolkit";

const tooManyIngredientsListener = createListenerMiddleware()

tooManyIngredientsListener.startListening({
    predicate: (action, currentState, previousState)=>{
        return currentState.ingredients.length > 10
    },
    effect: (action, listenerApi)=>{
        console.log("Trop d'ingrédients ajoutés!");
    }
})

export default tooManyIngredientsListener.middleware