import { Product } from './product';
import { StockEntry } from './stock-entry';

export interface CartProduct {
  stockEntry: StockEntry;
  orderedQuantity: number;
  price: number;
}
