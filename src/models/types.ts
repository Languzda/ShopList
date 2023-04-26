export type ShopItem = {
  name: string;
  value: number;
  id: string;
};

export type userType = { email: string; displayName: string; uid: string };

export type stateType = {
  items: ShopItem[];
  user: userType | null;
  isLogged: boolean;
  // isInitialized: boolean;
};

export type databaseType = { uid: string; items: ShopItem[] };
