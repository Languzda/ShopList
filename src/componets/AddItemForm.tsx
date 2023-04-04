import { useContext, useState } from "react";
import { ShopContext } from "../store/shop-context";

import styles from "./AddItemForm.module.scss";

const AddItemForm = () => {
  const [enteredProduct, setEnteredProduct] = useState<string>("");
  const [enteredQuantity, setEnteredQuantity] = useState<number>(1);

  const ShopCtx = useContext(ShopContext);

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

    ShopCtx.addItem(enteredProduct, enteredQuantity);

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
