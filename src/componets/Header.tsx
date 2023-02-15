import { useContext } from "react";
import { Link } from "react-router-dom";

import styles from "./Header.module.css";
import { NavigateContext } from "../store/navigate-context";

const Header = () => {
  const NavCtx = useContext(NavigateContext);

  const test = () => {
    if (NavCtx.page === "/new") {
      NavCtx.goToNewPage();
    } else {
      NavCtx.goToMainPAge();
    }
  };

  return (
    <header className={styles.header}>
      <Link to={NavCtx.page} onClick={test}>
        <h1>Shopliest</h1>
      </Link>
    </header>
  );
};

export default Header;
