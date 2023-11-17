import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.cart.push(action.payload);
    },
    removeItem: (state, action) => {
      // state.cart = state.cart.filter((item) => item.id !== action.payload);
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity: (state, action) => {
      // const item = state.cart.find((item) => item.id === action.payload);
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    // decreaseItemQuantity: (state, action) => {
    //   const item = state.cart.find((item) => item.id === action.payload);
    //   item.quantity--;
    //   item.totalPrice = item.quantity * item.unitPrice;
    // },
    decreaseItemQuantity: (state, action) => {
      // const item = state.cart.find((item) => item.id === action.payload);
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      if (item.quantity > 1) {
        item.quantity--;
        item.totalPrice = item.quantity * item.unitPrice;
      }
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  removeItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;

// //---1

//---2
// import { createSlice } from '@reduxjs/toolkit';

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState: {
//     items: [],
//   },
//   reducers: {
//     addItem: (state, action) => {
//       const existingItem = state.items.find(
//         (item) => item.id === action.payload.id
//       );

//       if (existingItem) {
//         // If the item already exists, increase the quantity
//         existingItem.quantity += 1;
//       } else {
//         // If the item doesn't exist, add it to the cart
//         state.items.push({ ...action.payload, quantity: 1 });
//       }
//     },
//     removeItem: (state, action) => {
//       state.items = state.items.filter((item) => item.id !== action.payload);
//     },
//     clearCart: (state) => {
//       state.items = [];
//     },
//   },
// });

// export const { addItem, removeItem, clearCart } = cartSlice.actions;
// export default cartSlice.reducer;

// //--- 1
// import { createSlice } from '@reduxjs/toolkit';

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState: {
//     items: [],
//   },
//   reducers: {
//     addItem: (state, action) => {
//       state.items.push(action.payload);
//     },
//     removeItem: (state, action) => {
//       state.items = state.items.filter((item) => item.id !== action.payload);
//     },
//   },
// });

// export const { addItem, removeItem } = cartSlice.actions;
// export default cartSlice.reducer;
