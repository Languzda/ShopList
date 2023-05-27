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
import { stateActions } from "./store/state-slice";
import { uiActions } from "./store/ui-slice";
import { strings } from "./store/strings";
import { useSelector } from "react-redux/es/exports";

function App() {
  const dispatch = useDispatch();

  const language = useSelector((state: any) => state.ui.language);

  const text = language === "pl" ? strings.pl : strings.en;

  onAuthStateChanged(auth, (user) => {
    const language = localStorage.getItem("language");
    if (language) {
      dispatch(uiActions.changeLanguage(language));
    }
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
        dispatch(stateActions.login(payload));
        dispatch(uiActions.showMessage(`${text.welcome} ${user.displayName}`));
        setTimeout(() => {
          dispatch(uiActions.hideMessage());
        }, 3000);
      }
      // Action to display auth error
    } else {
      dispatch(stateActions.logout());
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
