import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import CartReducer from "./CartSlice";

const AppStore=configureStore({
    reducer:{
        cart:CartReducer
    }
    
})
export default AppStore;