import { StockEntry } from './stock-entry';
import { Adapter } from './adapter';

export class Price {
  constructor(
    public price_id: number | null,
    public stockEntry: StockEntry,
    public price: number,
    public dateUpdated: number
  ) {}
}

export class PriceAdapter implements Adapter<Price> {

  adapt(item: any) {
    return new Price(
      item.price_id,
      item.stockEntry,
      item.price,
      item.dateUpdated
    );
  }
}
