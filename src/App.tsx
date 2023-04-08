import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.scss";

import ErrorPage from "./Pages/Error";
import NewItemPage from "./Pages/NewItem";
import RootLayout from "./Pages/Root";
import ShopListPage from "./Pages/ShopList";
import LoginPage from "./Pages/Login";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/init";
import { useDispatch } from "react-redux";
import { authActions } from "./store/auth-slice";

function App() {
  const dispatch = useDispatch();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      if (
        user.displayName !== null &&
        user.email !== null &&
        user.uid !== null
      ) {
        const payload = {
          email: user.email,
          uid: user.uid,
          displayName: user.displayName,
        };
        dispatch(authActions.login(payload));
      }
      // Action to display auth error
    } else {
      dispatch(authActions.logout());
    }
  });

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
