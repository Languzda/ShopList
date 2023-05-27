import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { stateActions } from "../store/state-slice";
import { databaseType, ShopItem } from "../models/types";
import { sendListData } from "../store/listActions";
import { strings } from "../store/strings";
import { uiActions } from "../store/ui-slice";

import styles from "./AddItemForm.module.scss";

const AddItemForm = () => {
  const [enteredProduct, setEnteredProduct] = useState<string>("");
  const [enteredQuantity, setEnteredQuantity] = useState<number>(1);

  const dispatch = useDispatch();

  const isLogged = useSelector((state: any) => state.state.isLogged);
  const items = useSelector((state: any) => state.state.items);
  const user = useSelector((state: any) => state.state.user);
  const language = useSelector((state: any) => state.ui.language);

  const text = language === "pl" ? strings.pl : strings.en;

  const onProductChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredProduct(event.target.value);
  };

  const onQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredQuantity(+event.target.value);
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (enteredProduct.trim().length === 0) {
      dispatch(uiActions.showError(text.addFaultName));
      setTimeout(() => {
        dispatch(uiActions.hideMessage());
      }, 2000);
      return;
    }

    if (enteredQuantity < 1 || enteredQuantity > 100) {
      dispatch(uiActions.showError(text.addFaultQuantity));
      setTimeout(() => {
        dispatch(uiActions.hideMessage());
      }, 2000);
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
        dispatch(uiActions.showError("User not logged in"));
        setTimeout(() => {
          dispatch(uiActions.hideMessage());
        }, 2000);
      }
    }

    setEnteredProduct("");
    setEnteredQuantity(1);

    // TODO: Add a modal instead of alert
    dispatch(uiActions.showMessage(text.addedSuccessfully));
    setTimeout(() => {
      dispatch(uiActions.hideMessage());
    }, 2000);
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <label>{text.Product}</label>
      <input type="text" value={enteredProduct} onChange={onProductChange} />
      <label>{text.quantity}</label>
      <input
        type="number"
        value={enteredQuantity}
        onChange={onQuantityChange}
      />

      <button type="submit">{text.add}</button>
    </form>
  );
};

export default AddItemForm;
