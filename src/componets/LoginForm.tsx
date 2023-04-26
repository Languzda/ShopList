import { signOut } from "firebase/auth";
import { auth } from "../firebase/init";
import { useSelector } from "react-redux/es/exports";
import { FirebaseAuth } from "../firebase/firebaseAuthUi";

const LoginForm = () => {
  const isLoggedIn = useSelector((state: any) => state.state.isLogged);

  const singOutHandler = async () => {
    signOut(auth);
  };

  return (
    <div>
      {!isLoggedIn && <FirebaseAuth />}
      {isLoggedIn && (
        <div>
          <button onClick={singOutHandler}>wyloguj</button>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
