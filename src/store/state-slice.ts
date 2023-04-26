import { createSlice } from "@reduxjs/toolkit";
import { userType, stateType, ShopItem } from "../models/types";

const initialState: stateType = {
  items: [],
  user: null,
  isLogged: false,
  // isInitialized: false,
};

const stateSlice = createSlice({
  name: "appState",
  initialState: initialState,
  reducers: {
    login(state, action: { payload: userType }) {
      state.user = action.payload;
      state.isLogged = true;
      // state.isInitialized = false;
    },

    logout(state) {
      state.user = null;
      state.isLogged = false;
      // state.isInitialized = false;
    },

    setupList(state, action: { payload: ShopItem[] }) {
      state.items = action.payload;
      if (state.isLogged) {
        // state.isInitialized = true;
      }
    },

    addItem(state, action: { payload: ShopItem }) {
      state.items = [...state.items, action.payload];

      if (state.isLogged) {
        /// push to firebase database
        // state.isInitialized = true;
      } else {
        localStorage.setItem("shopList", JSON.stringify(state.items));
      }
    },

    removeItem(state, action: { payload: string }) {
      state.items = state.items.filter((item) => item.id !== action.payload);
      if (state.isLogged) {
        // push to firebase database
        // state.isInitialized = true;
      } else {
        localStorage.setItem("items", JSON.stringify(state.items));
      }
    },
  },
});

export const stateActions = stateSlice.actions;

export default stateSlice.reducer;
