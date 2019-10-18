import { Item } from './item';
import { CartProduct } from './cartProduct';

export interface Order {
  id: number;
  user: any; // unnecessary?
  date: number;
  totalAmount: number;
  totalItems: number;
  items: Item[];
  cartProducts: CartProduct[];
}
