import { signOut } from "firebase/auth";
import { auth } from "../firebase/init";
import { useSelector } from "react-redux/es/exports";
import { FirebaseAuth } from "../firebase/firebaseAuthUi";
import { strings } from "../store/strings";
import styles from "./LoginForm.module.scss";

const LoginForm = () => {
  const isLoggedIn = useSelector((state: any) => state.state.isLogged);
  const language = useSelector((state: any) => state.ui.language);

  const text = language === "pl" ? strings.pl : strings.en;

  const singOutHandler = async () => {
    signOut(auth);
  };

  return (
    <div>
      {!isLoggedIn && <FirebaseAuth />}
      {isLoggedIn && (
        <div>
          <button className={styles.btn} onClick={singOutHandler}>
            {text.logout}
          </button>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
