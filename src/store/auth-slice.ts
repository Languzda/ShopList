import { createSlice } from "@reduxjs/toolkit";

type authState = {
  user: { email: string; displayName: string; uid: string } | null;
  isLogged: boolean;
};

const initialState: authState = { user: null, isLogged: false };

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login(
      state,
      action: { payload: { email: string; displayName: string; uid: string } }
    ) {
      state.user = action.payload;
      state.isLogged = true;
    },

    logout(state) {
      state.user = null;
      state.isLogged = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
