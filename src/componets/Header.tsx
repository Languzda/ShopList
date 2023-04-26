import { useState } from "react";

import styles from "./Header.module.scss";
import Navigation from "./Navigation";

const Header = () => {
  const [isShown, setIsShown] = useState(false);

  let navigationClasses: string;

  const showNavigation = () => {
    setIsShown((prevState) => {
      return !prevState;
    });
  };

  if (isShown) navigationClasses = styles.nav + " " + styles.open;
  else navigationClasses = styles.nav + " " + styles.closed;

  return (
    <>
      <header className={styles.header}>
        <h1>Shopliest</h1>

        <button className={styles["btn-nav"]} onClick={showNavigation}>
          Naw
        </button>
      </header>
      <div className={navigationClasses}>
        <Navigation onLinkClick={showNavigation} />
      </div>
    </>
  );
};

export default Header;
