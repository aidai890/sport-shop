import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemCart: [],
  },
  reducers: {
    setItenCart: (state, action) => {
      state.itemCart.push(action.payload);
    },
    deleteCart: (state, action) => {
      state.itemCart = state.itemCart.filter(
        (imeges) =>imeges.id !== action.payload
      );
    },
  },
});
export const {setItenCart,deleteCart}=cartSlice.actions;
export const cartReducer=cartSlice.reducer;