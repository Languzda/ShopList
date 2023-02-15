import { useContext } from "react";
import { ShopContext } from "../store/shop-context";
import Item from "./Item";

const ItemList: React.FC = () => {
  const ShopCtx = useContext(ShopContext);

  return (
    <ul>
      {ShopCtx.items.map((item) => (
        <Item
          key={item.id}
          text={item.name}
          value={item.value}
          onDelete={ShopCtx.removeItem.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default ItemList;
