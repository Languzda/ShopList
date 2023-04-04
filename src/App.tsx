import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.scss";

import ErrorPage from "./Pages/Error";
import NewItemPage from "./Pages/NewItem";
import RootLayout from "./Pages/Root";
import ShopListPage from "./Pages/ShopList";
import LoginPage from "./Pages/Login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <ShopListPage /> },
        { path: "/new", element: <NewItemPage /> },
        { path: "/signin", element: <LoginPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
