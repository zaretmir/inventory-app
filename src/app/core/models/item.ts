import { StockEntry } from './stock-entry';
import { Adapter } from './adapter';

export class Item {
  constructor(
    public itemOrigin: StockEntry,
    public orderedQuantity: number
  ) {}

}

export class ItemAdapter implements Adapter<Item> {

  adapt(item: any) {
    return new Item(
      item.itemOrigin,
      item.orderedQuantity
    );
  }
}
