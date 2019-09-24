import { Price } from './price';

export interface StockEntry {
  hangarPk: number;
  productPk: number;
  quantity: number;
  priceHistory: Price[];
}
