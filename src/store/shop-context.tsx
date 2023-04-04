import React, { PropsWithChildren, useState } from "react";

import { ShopItem } from "../models/ShopItem";

const dataFromLocal = localStorage.getItem("shopList");

const dataParsed =
  dataFromLocal === null ? false : JSON.parse(dataFromLocal || "");

let ShopItems: ShopItem[];

if (dataParsed) {
  ShopItems = dataParsed.map(
    (dataItem: { name: string; value: number }) =>
      new ShopItem(dataItem.name, dataItem.value)
  );
} else {
  ShopItems = [];
}

type ShopListContextObj = {
  items: ShopItem[];
  addItem: (name: string, value: number) => void;
  removeItem: (id: string) => void;
};

export const ShopContext = React.createContext<ShopListContextObj>({
  items: [],
  addItem: (name: string, value: number) => {},
  removeItem: (id: string) => {},
});

const ShopContextProvider: React.FC<PropsWithChildren> = (props) => {
  const [shopItems, setShopItems] = useState<ShopItem[]>(ShopItems);

  function addItem(name: string, value: number = 1) {
    const newItem = new ShopItem(name, value);

    setShopItems((prevState) => {
      const shopList = prevState.concat(newItem);
      localStorage.setItem("shopList", JSON.stringify(shopList));
      return shopList;
    });
  }

  function removeItem(ItemId: string) {
    setShopItems((prevState) => {
      const shopList = prevState.filter((item) => item.id !== ItemId);
      localStorage.setItem("shopList", JSON.stringify(shopList));
      return shopList;
    });
  }

  const ShopContextValue: ShopListContextObj = {
    items: shopItems,
    addItem: addItem,
    removeItem: removeItem,
  };

  return (
    <ShopContext.Provider value={ShopContextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
