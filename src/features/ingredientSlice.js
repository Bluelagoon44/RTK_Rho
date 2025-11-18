import { createSlice } from "@reduxjs/toolkit";

const ingredientsSlice = createSlice({
    name:'ingredients',
    initialState: [],
    reducers: {
        addIngredient: {
            reducer:(state, action)=>{
                state.push(action.payload)
            }
        }
    }
})