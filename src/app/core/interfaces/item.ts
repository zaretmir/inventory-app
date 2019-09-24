import { StockEntry } from './stock-entry';

export interface Item {
  itemOrigin: StockEntry;
  orderedQuantity: number;
}
