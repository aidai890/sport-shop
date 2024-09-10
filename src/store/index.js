import { configureStore } from "@reduxjs/toolkit";
import shopSlice from "./shopSlice";
import signUpSlices from "./slices/signUpSlices";
import { cartReducer } from "./cart/reducer";

const store=configureStore({
    reducer:{
        shop:shopSlice,
        signUp:signUpSlices,
        cart:cartReducer,
    } 
    
})
export default store;

