import { Outlet } from "react-router-dom";

import styles from "./Root.module.scss";

import Header from "../componets/Header";
import Modal from "../componets/Modal";

const RootLayout = () => {
  return (
    <div className={styles.App}>
      <Header />

      <main className={styles.main}>
        <Outlet />
      </main>
      <Modal />
    </div>
  );
};

export default RootLayout;
