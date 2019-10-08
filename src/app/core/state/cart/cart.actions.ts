import { Action } from '@ngrx/store';
import { Item } from '../../interfaces/item';

export enum CartActionTypes {
  IncrementItems = '[Cart] Increment item count',
  AddItem = '[Cart] Add item to cart',
  ItemAdded = '[Cart] Item added to cart'
}

export class IncrementItems implements Action {
  readonly type = CartActionTypes.IncrementItems;
  constructor(public payload: number) {}
}

export class AddItem implements Action {
  readonly type = CartActionTypes.AddItem;
  constructor(public item: Item) {}
}

export class ItemAdded implements Action {
  readonly type = CartActionTypes.ItemAdded;
  constructor(public payload: number) {}
}

export type CartAction = IncrementItems
  | AddItem
  | ItemAdded;
