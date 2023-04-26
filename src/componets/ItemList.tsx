import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { stateActions } from "../store/state-slice";
import { userType, databaseType, ShopItem } from "../models/types";
import { sendListData } from "../store/listActions";

import Item from "./Item";

import styles from "./ItemList.module.scss";

const ItemList: React.FC = () => {
  const dispatch = useDispatch();
  const itemList: ShopItem[] = useSelector((state: any) => state.state.items);
  const isLogged = useSelector((state: any) => state.state.isLogged);
  const user: userType = useSelector((state: any) => state.state.user);

  const onRemoveItem = (id: string) => {
    if (isLogged) {
      const dataToSend: databaseType = {
        items: itemList.filter((item) => item.id !== id),
        uid: user?.uid,
      };
      // @ts-ignore
      dispatch(sendListData(dataToSend));
    }
    dispatch(stateActions.removeItem(id));
  };

  return (
    <>
      {itemList.length !== 0 && (
        <ul className={styles.list}>
          {itemList.map((item: ShopItem) => (
            <Item
              key={item.id}
              text={item.name}
              value={item.value}
              onDelete={() => {
                onRemoveItem(item.id);
              }}
            />
          ))}
        </ul>
      )}

      {itemList.length === 0 && (
        <Link to="new">
          <h2>Add your items</h2>
        </Link>
      )}
    </>
  );
};

export default ItemList;
