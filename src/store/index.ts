import { configureStore } from "@reduxjs/toolkit";

import stateReducer from "./state-slice";

const store = configureStore({
  reducer: { state: stateReducer },
});

export default store;
