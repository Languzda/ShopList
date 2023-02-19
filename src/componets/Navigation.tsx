import { Link } from "react-router-dom";

import styles from "./Navigation.module.css";

const Navigation: React.FC<{ onLinkClick: () => void }> = (props) => {
  return (
    <ul className={styles.navList}>
      <li>
        <Link to="/" onClick={props.onLinkClick}>
          Shop List
        </Link>
      </li>
      <li>
        <Link to="/new" onClick={props.onLinkClick}>
          Add Item
        </Link>
      </li>
    </ul>
  );
};

export default Navigation;
