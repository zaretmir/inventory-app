import { Item } from './item';
import { CartProduct } from './cartProduct';
import { Adapter } from './adapter';

export class Order {

  constructor(
    public id: number,
    public user: any, // unnecessary?
    public date: number,
    public totalAmount: number,
    public totalItems: number,
    public items: Item[],
    public cartProducts: CartProduct[]
  ) {}
}

export class OrderAdapter implements Adapter<Order> {

  adapt(item: any) {
    return new Order(
      item.id,
      item.user, // unnecessary?
      item.date,
      item.totalAmount,
      item.totalItems,
      item.items,
      item.cartProducts
    );

  }
}
