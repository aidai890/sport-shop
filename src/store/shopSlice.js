import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getSport = createAsyncThunk("Sport/getSport", async () => {
  const { data } = await axios.get(
    "https://656df576bcc5618d3c244f13.mockapi.io/ap/v1/Shop"
  );
  return data;
});

const shopSlice = createSlice({
  name: "Sport",
  initialState: {
    SportData: [],
    isLoading: false,
    error: "",
    itemCart: []
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItemIndex = initialState.itemCart.findIndex(item => item.id === newItem.id);
      if (existingItemIndex !== -1) {
        initialState.itemCart[existingItemIndex].quantity += {...newItem};
        initialState.itemCart[existingItemIndex].price += newItem.price;
      } else {
        initialState.itemCart.push({ quantity: 1, totalPrice: newItem.price });
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSport.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSport.fulfilled, (state, action) => {
        state.isLoading = false;
        state.SportData = action.payload;
      })
      .addCase(getSport.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default shopSlice.reducer;
