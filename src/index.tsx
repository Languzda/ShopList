import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ShopContextProvider from "./store/shop-context";
import NavigateContextProvider from "./store/navigate-context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ShopContextProvider>
    <NavigateContextProvider>
      <App />
    </NavigateContextProvider>
  </ShopContextProvider>
);
