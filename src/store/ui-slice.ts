import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isShown: false,
  isError: false,
  message: "",
  language: "en",
};

const uiSlice = createSlice({
  name: "uiSlice",
  initialState: initialState,
  reducers: {
    changeLanguage(state, action?) {
      if (action.payload) {
        state.language = action.payload;
        localStorage.setItem("language", action.payload);
      } else {
        if (state.language === "en") {
          state.language = "pl";
          localStorage.setItem("language", "pl");
        } else {
          state.language = "en";
          localStorage.setItem("language", "en");
        }
      }
    },

    showMessage(state, action) {
      state.isShown = true;
      state.isError = false;
      state.message = action.payload;
    },

    showError(state, action) {
      state.isShown = true;
      state.isError = true;
      state.message = action.payload;
    },

    hideMessage(state) {
      state.isShown = false;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
