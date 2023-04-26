import { Link } from "react-router-dom";

import styles from "./Navigation.module.scss";
import { useSelector } from "react-redux";

const Navigation: React.FC<{ onLinkClick: () => void }> = (props) => {
  const isLogged = useSelector((state: any) => state.state.isLogged);
  return (
    <ul className={styles.navList}>
      <li>
        <Link to="/" onClick={props.onLinkClick}>
          Lista Zakupów
        </Link>
      </li>
      <li>
        <Link to="/new" onClick={props.onLinkClick}>
          Dodaj Produkt
        </Link>
      </li>
      <li>
        <Link to="/signin" onClick={props.onLinkClick}>
          {isLogged ? "Wyloguj" : "Zaloguj"}
        </Link>
      </li>
    </ul>
  );
};

export default Navigation;
