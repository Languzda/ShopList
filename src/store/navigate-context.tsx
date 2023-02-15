import { PropsWithChildren, useState } from "react";
import React from "react";

type NavigateContextObj = {
  page: string;
  goToNewPage: () => void;
  goToMainPAge: () => void;
};

export const NavigateContext = React.createContext<NavigateContextObj>({
  page: "/",
  goToNewPage: () => {},
  goToMainPAge: () => {},
});

const NavigateContextProvider: React.FC<PropsWithChildren> = (props) => {
  const [nextPage, setNextPage] = useState("/new");

  const onMain = () => {
    setNextPage("/");
  };

  const onAddPage = () => {
    setNextPage("/new");
  };

  const NavigateContextValue: NavigateContextObj = {
    page: nextPage,
    goToNewPage: onMain,
    goToMainPAge: onAddPage,
  };

  return (
    <NavigateContext.Provider value={NavigateContextValue}>
      {props.children}
    </NavigateContext.Provider>
  );
};

export default NavigateContextProvider;
