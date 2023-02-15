export class ShopItem {
  name: string;
  value: number;
  id: string;

  constructor(itemName: string, itemValue: number = 1) {
    this.name = itemName;
    this.value = itemValue;
    this.id = Math.random().toString();
  }
}
