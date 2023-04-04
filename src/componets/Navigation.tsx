import { Link } from "react-router-dom";

import styles from "./Navigation.module.scss";

const Navigation: React.FC<{ onLinkClick: () => void }> = (props) => {
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
    </ul>
  );
};

export default Navigation;
