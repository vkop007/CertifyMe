import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: string | number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  loading: boolean;
  error: string | null;
}

const initialState: CartState = {
  items: [],
  loading: false,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCartRequest(state, _action: PayloadAction<CartItem>) {
      state.loading = true;
      state.error = null;
    },

    addToCartSuccess(state, action: PayloadAction<CartItem>) {
      const existing = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }

      state.loading = false;
    },

    decreaseQuantity(state, action: PayloadAction<string | number>) {
      const item = state.items.find(
        (i) => i.id === action.payload
      );

      if (!item) return;

      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.items = state.items.filter(
          (i) => i.id !== action.payload
        );
      }
    },

    removeFromCart(state, action: PayloadAction<string | number>) {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
    },

    addToCartFailure(state, action: PayloadAction<string | undefined>) {
      state.loading = false;
      state.error = action.payload || "Cart error";
    },
  },
});

export const {
  addToCartRequest,
  addToCartSuccess,
  addToCartFailure,
  removeFromCart,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
