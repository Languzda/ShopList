import { useEffect } from "react";
import * as firebaseui from "firebaseui";
import { auth } from "./init";
import { EmailAuthProvider } from "firebase/auth";
import "firebaseui/dist/firebaseui.css";

export const FirebaseAuth = () => {
  useEffect(() => {
    const ui =
      firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);

    ui.start("#firebase-auth-ui", {
      signInOptions: [
        EmailAuthProvider.PROVIDER_ID,
        // { provider: GoogleAuthProvider.PROVIDER_ID },
      ],
      signInSuccessUrl: "/",
      popupMode: true,
      signInFlow: "popup",
    });
  }, []);

  return (
    <>
      <div id="firebase-auth-ui"></div>
    </>
  );
};
