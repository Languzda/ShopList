import { configureStore } from "@reduxjs/toolkit";

import authRedecer from "./auth-slice";

const store = configureStore({ reducer: { auth: authRedecer } });

export default store;
