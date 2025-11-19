import { createSlice, nanoid } from "@reduxjs/toolkit";

const ingredientsSlice = createSlice({
    name:'ingredients',
    initialState: [],
    reducers: {
        addIngredient: {
            reducer:(state, action)=>{
                state.push(action.payload)
            },
            prepare:(content)=>{                
                const id = nanoid()
                return { payload : {id, ...content}}
            }
        },
        addIngredients: (state, action)=>{            
            for(let i=1; i<21; i++){
                if(action.payload["strIngredient"+i] !== ""){
                    state.push({
                        id: nanoid(),
                        date: action.payload.date,
                        "name": action.payload["strIngredient"+i],
                        "quantity": action.payload["strMeasure"+i],
                        "recipe" : action.payload["strMeal"]
                    })
                }
            }
        },
        deleteIngredient: (state, action)=>{
            return state.filter((ingredient)=>ingredient.id !== action.payload)
        },
        editIngredient: (state, action)=>{
            const ingredientPos = state.findIndex(i => i.id === action.payload.id)
            
            state[ingredientPos].quantity = action.payload.quantity
            state[ingredientPos].date = action.payload.date
        }
    },
    selectors:{
        selectIngredient: (state, id) => {
            state.find(ingredient => ingredient.id === id)
        },
    }
})

export const {addIngredient, addIngredients, deleteIngredient, editIngredient} = ingredientsSlice.actions
export const {selectIngredient} = ingredientsSlice.selectors
export default ingredientsSlice.reducer