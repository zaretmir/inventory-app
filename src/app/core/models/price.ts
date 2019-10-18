import { StockEntry } from './stock-entry';

export interface Price {
  price_id?: number;
  stockEntry: StockEntry;
  price: number;
  dateUpdated: number;
}
