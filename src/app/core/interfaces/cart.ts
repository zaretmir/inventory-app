import { Item } from './item';

export interface Order {
  id: number;
  user: any; // unnecessary?
  date: number;
  totalAmount: number;
  totalItems: number;
  items: Item[];
}
