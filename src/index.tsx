import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import ShopContextProvider from "./store/shop-context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ShopContextProvider>
    <App />
  </ShopContextProvider>
);
