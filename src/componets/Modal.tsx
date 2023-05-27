import { useSelector } from "react-redux";

import styles from "./Modal.module.scss";

const Modal = () => {
  const isError = useSelector((state: any) => state.ui.isError);
  const message = useSelector((state: any) => state.ui.message);
  const isShown = useSelector((state: any) => state.ui.isShown);

  let classes = isShown ? styles.modal + " " + styles.open : styles.modal;

  classes = isError ? classes + " " + styles.error : classes;

  return <div className={classes}>{message}</div>;
};

export default Modal;
