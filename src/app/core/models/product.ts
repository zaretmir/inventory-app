import { StockEntry } from './stock-entry';

export interface Product {
  id: number;
  name: string;
  description: string;
  active: boolean;
  //stockEntries: StockEntry[];
}
