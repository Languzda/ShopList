import { Outlet } from "react-router-dom";

import styles from "./Root.module.scss";

import Header from "../componets/Header";

const RootLayout = () => {
  return (
    <div className={styles.App}>
      <Header />

      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
