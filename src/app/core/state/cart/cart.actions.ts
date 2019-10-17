import { Action } from '@ngrx/store';
import { Item } from '../../models/item';
import { CartProduct } from '../../models/cartProduct';

export enum CartActionTypes {
  AddItem = '[Cart] Add item to cart',
  DeleteItem = '[Cart] Delete item from cart',
  ItemAdded = '[Cart] Item added to cart'
}

export class AddItem implements Action {
  readonly type = CartActionTypes.AddItem;
  constructor(public cartProduct: CartProduct) {}
}

export class DeleteItem implements Action {
  readonly type = CartActionTypes.DeleteItem;
  constructor(public cartProduct: CartProduct) {}
}

export class ItemAdded implements Action {
  readonly type = CartActionTypes.ItemAdded;
  constructor(public payload: number) {}
}

export type CartAction = AddItem
  | DeleteItem
  | ItemAdded;
