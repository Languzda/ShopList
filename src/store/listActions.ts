import { databaseType } from "../models/types";
import { db } from "../firebase/init";
import { stateActions } from "./state-slice";
import { set, ref, get, child } from "firebase/database";

export const sendListData = (listData: databaseType) => {
  return async (dispatch: any) => {
    try {
      await set(ref(db, "users/" + listData.uid), {
        items: listData.items,
      });
    } catch (error: any) {
      console.log(error.message);
    }
  };
};

export const fetchListData = (uid: string) => {
  return async (dispatch: any) => {
    const sendRequest = async () => {
      const data = await get(child(ref(db), "users/" + uid));

      if (data.exists()) {
        return data.val().items;
      } else {
        return [];
      }
    };

    try {
      const data = await sendRequest();

      dispatch(stateActions.setupList(data));
    } catch (error: any) {
      console.log(error.message);
    }
  };
};

export const fetchListDataFromLocalStorage = () => {
  return (dispatch: any) => {
    const data = localStorage.getItem("shopList");

    if (data) {
      dispatch(stateActions.setupList(JSON.parse(data)));
    } else {
      dispatch(stateActions.setupList([]));
    }
  };
};
