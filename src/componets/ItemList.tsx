import { useContext } from "react";
import { ShopContext } from "../store/shop-context";
import { Link } from "react-router-dom";

import Item from "./Item";

import styles from "./ItemList.module.css";

const ItemList: React.FC = () => {
  const ShopCtx = useContext(ShopContext);

  return (
    <>
      {ShopCtx.items.length !== 0 && (
        <ul className={styles.list}>
          {ShopCtx.items.map((item) => (
            <Item
              key={item.id}
              text={item.name}
              value={item.value}
              onDelete={ShopCtx.removeItem.bind(null, item.id)}
            />
          ))}
        </ul>
      )}
      {ShopCtx.items.length === 0 && (
        <Link to="new">
          <h2>Add your items</h2>
        </Link>
      )}
    </>
  );
};

export default ItemList;
