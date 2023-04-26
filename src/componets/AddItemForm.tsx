import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { stateActions } from "../store/state-slice";
import { databaseType, ShopItem } from "../models/types";
import { sendListData } from "../store/listActions";

import styles from "./AddItemForm.module.scss";

const AddItemForm = () => {
  const [enteredProduct, setEnteredProduct] = useState<string>("");
  const [enteredQuantity, setEnteredQuantity] = useState<number>(1);

  const dispatch = useDispatch();

  const isLogged = useSelector((state: any) => state.state.isLogged);
  const items = useSelector((state: any) => state.state.items);
  const user = useSelector((state: any) => state.state.user);

  const onProductChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredProduct(event.target.value);
  };

  const onQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredQuantity(+event.target.value);
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (enteredProduct.trim().length === 0) {
      return;
    }

    if (enteredQuantity < 0 || enteredQuantity > 99) {
      return;
    }

    const newItem: ShopItem = {
      name: enteredProduct,
      value: enteredQuantity,
      id: Math.random().toString(),
    };

    dispatch(stateActions.addItem(newItem));

    if (isLogged) {
      if (user?.uid) {
        const userId = user.uid;

        const dataToSend: databaseType = {
          items: [...items, newItem],
          uid: userId,
        };
        // @ts-ignore
        dispatch(sendListData(dataToSend));
      } else {
        console.log("handle error");
      }
    }

    setEnteredProduct("");
    setEnteredQuantity(1);

    // TODO: Add a modal instead of alert
    window.alert("Dodano produkt do listy zakupów!");
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <label>Produkt:</label>
      <input type="text" value={enteredProduct} onChange={onProductChange} />
      <label>Ilość:</label>
      <input
        type="number"
        min={1}
        max={99}
        value={enteredQuantity}
        onChange={onQuantityChange}
      />

      <button type="submit">Dodaj</button>
    </form>
  );
};

export default AddItemForm;
