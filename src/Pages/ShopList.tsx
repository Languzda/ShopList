import ItemList from "../componets/ItemList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchListData,
  fetchListDataFromLocalStorage,
} from "../store/listActions";

const ShopListPage = () => {
  const dispatch = useDispatch();

  const isLogged = useSelector((state: any) => state.state.isLogged);
  const user = useSelector((state: any) => state.state.user);

  // fetching data from database
  useEffect(() => {
    if (isLogged) {
      if (user?.uid) {
        const userId = user.uid;
        // @ts-ignore
        dispatch(fetchListData(userId));
      } else {
        console.log("handle error");
      }
    }
    // @ts-ignore
    else dispatch(fetchListDataFromLocalStorage());
  }, [dispatch, isLogged, user?.uid]);

  return <ItemList />;
};

export default ShopListPage;
