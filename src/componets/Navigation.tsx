import { Link } from "react-router-dom";

import styles from "./Navigation.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../store/ui-slice";
import { strings } from "../store/strings";

const Navigation: React.FC<{ onLinkClick: () => void }> = (props) => {
  const isLogged = useSelector((state: any) => state.state.isLogged);
  const language = useSelector((state: any) => state.ui.language);

  const text = language === "pl" ? strings.pl : strings.en;

  const dispatch = useDispatch();

  const onLanguageChange = () => {
    dispatch(uiActions.changeLanguage(null));
    props.onLinkClick();
  };

  return (
    <ul className={styles.navList}>
      <li>
        <Link to="/" onClick={props.onLinkClick}>
          {text.shopList}
        </Link>
      </li>
      <li>
        <Link to="/new" onClick={props.onLinkClick}>
          {text.addProduct}
        </Link>
      </li>
      <li>
        <Link to="/signin" onClick={props.onLinkClick}>
          {isLogged ? text.logout : text.login}
        </Link>
      </li>
      <li>
        <p onClick={onLanguageChange}>{text.languageReverse}</p>
      </li>
    </ul>
  );
};

export default Navigation;
