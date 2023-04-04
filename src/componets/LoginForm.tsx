import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(false);

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSignIn = async (
    url: string,
    user: { email: string; password: string }
  ) => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...user, returnSecureToken: true }),
    });

    const data = await response.json();

    console.log(data);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (email === "") {
      return;
    }

    if (password === "" || password.length < 6) {
      return;
    }

    const user = {
      email,
      password,
    };

    let url: string;

    if (isSignedIn) {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.FIREBASE_AUTH_API_KEY}`;
    } else {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.FIREBASE_AUTH_API_KEY}`;
    }

    handleSignIn(url, user);

    setEmail("");
    setPassword("");
  };

  const handleSwitch = () => {
    setIsSignedIn(!isSignedIn);
    console.log(process.env.FIREBASE_AUTH_API_KEY);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={onEmailChange} />
        <input type="password" value={password} onChange={onPasswordChange} />
        <button type="submit">
          {isSignedIn ? "Zarejestruj się" : "Zaloguj się"}
        </button>
        <button type="button" onClick={handleSwitch}>
          {" "}
          {isSignedIn ? "Zaloguj się" : "Zarejestruj się"}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
