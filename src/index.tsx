import ReactDOM from "react-dom/client";
import "./index.scss";
import { Provider } from "react-redux";

import App from "./App";
import ShopContextProvider from "./store/shop-context";
import store from "./store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </Provider>
);
