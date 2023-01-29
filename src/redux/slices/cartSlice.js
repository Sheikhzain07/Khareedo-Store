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
          productName: newItem.productName,
          price: newItem.price,
          imgUrl: newItem.imgUrl,
          totalPrice: newItem.price,
          quantity: 1,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.price);
      }

      state.totalAmount = state.cartItems.reduce(
        (total, ele) => total + Number(ele.price) * Number(ele.quantity),
        0
      );
    },

    deleteItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.cartItems.find((ele) => ele.id === id);

      if (existingItem) {
        state.cartItems = state.cartItems.filter((ele) => {
          return ele.id !== id;
        });
        state.totalQuantity = state.totalQuantity - existingItem.quantity;
      }
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
