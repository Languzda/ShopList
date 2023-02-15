import { Outlet } from "react-router-dom";

import Header from "../componets/Header";

const RootLayout = () => {
  return (
    <div className="App">
      <Header />

      <main className="main">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
