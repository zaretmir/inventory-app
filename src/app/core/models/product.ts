import { StockEntry } from './stock-entry';
import { Injectable } from '@angular/core';
import { Adapter } from './adapter';

export class Product {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public active: boolean
  //stockEntries: StockEntry[];
  ) {}
}

@Injectable({providedIn: 'root'})
export class ProductAdapter implements Adapter<Product> {

  adapt(item: any): Product {
    return new Product(
      item.id,
      item.name,
      item.description,
      item.active
    );
  }

}
