import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalAmount: 0,
  totalQuantity: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find((ele) => ele.id === newItem.id);

      state.totalQuantity++;

      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          name: newItem.productName,
          price: newItem.price,
          image: newItem.imgUrl,
          totalPrice: newItem.price,
          quantity: 1,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(existingItem.price);
      }

      state.totalAmount = state.cartItems.reduce((total, ele) => {
        total = Number(ele.price) * Number(ele.quantity);
      });
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
