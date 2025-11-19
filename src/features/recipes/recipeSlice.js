import { createSlice, nanoid } from "@reduxjs/toolkit";

const recipesSlice = createSlice({
    name:'recipes',
    initialState: [],
    reducers: {
        addRecipe:{
            reducer:(state, action)=>{               
                state.push({
                    extendedProps : {id : action.payload.id},
                    title : action.payload.strMeal,
                    date : action.payload.date
                })
            },
            prepare:(content)=>{                
                const id = nanoid()
                return {payload: {id, ...content}}
            }
        },
        deleteRecipe:(state, action)=>{
            return state.filter((recipe)=>recipe.extendedProps.id !== action.payload)
        }
    },
    selectors:{
        
    }
})

export const {addRecipe, deleteRecipe} = recipesSlice.actions
export default recipesSlice.reducer