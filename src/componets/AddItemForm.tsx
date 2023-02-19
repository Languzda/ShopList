import { useContext, useRef } from "react";
import { ShopContext } from "../store/shop-context";
import { useNavigate } from "react-router-dom";

import styles from "./AddItemForm.module.css";

const AddItemForm = () => {
  const ItemTextInputRef = useRef<HTMLInputElement>(null);
  const ItemValueInputRef = useRef<HTMLInputElement>(null);

  const ShopCtx = useContext(ShopContext);

  const navigate = useNavigate();

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = ItemTextInputRef.current!.value;
    const enteredValue = Math.floor(+ItemValueInputRef.current!.value);

    if (enteredText.trim().length === 0) {
      return;
    }

    if (enteredValue < 0 || enteredValue > 99) {
      return;
    }

    ShopCtx.addItem(enteredText, enteredValue);

    navigate("/");
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div>
        <label>Product Name:</label>
        <input type="text" name="text" required ref={ItemTextInputRef} />
        <label>Product Value:</label>
        <input
          type="number"
          name="text"
          min={1}
          max={99}
          defaultValue={1}
          required
          ref={ItemValueInputRef}
        />
      </div>
      <button type="submit">Add Item</button>
    </form>
  );
};

export default AddItemForm;
