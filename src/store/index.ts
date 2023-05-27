import { configureStore } from "@reduxjs/toolkit";

import stateReducer from "./state-slice";
import uiReducer from "./ui-slice";

const store = configureStore({
  reducer: { state: stateReducer, ui: uiReducer },
});

export default store;
