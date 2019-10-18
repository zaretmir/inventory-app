import { Price } from './price';
import { Hangar } from './hangar';
import { Product } from './product';

export interface StockEntry {
  id: {
    hangarPk: number;
    productPk: number;
  };
  hangar?: Hangar;
  product?: Product;
  quantity?: number;
  priceHistory?: Price[];
}
