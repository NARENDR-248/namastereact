import { createSlice } from "@reduxjs/toolkit";
import items from "../items";

const CartSlice=createSlice({
    name:'cart',
    initialState:{
        itemes:[]
    },
    reducers:{
         addItem:(state,action)=>{
            state.itemes.push(action.payload)

         },
         removeItem:(state)=>{
            state.itemes.pop()
         },
         clearItem:(state)=>{
            state.itemes.length=0;

         }
    }
})

export const {addItem,removeItem,clearItem}=CartSlice.actions;
export default CartSlice.reducer;