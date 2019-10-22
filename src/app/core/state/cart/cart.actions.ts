import { Action } from '@ngrx/store';
import { Item } from '../../models/item';
import { CartProduct } from '../../models/cartProduct';

export enum CartActionTypes {
  ADD_ITEM = '[Cart] Add item to cart',
  ADD_NEW_ITEM = '[Cart] Add new item to cart',
  UPDATE_EXISTENT_ITEM = '[Cart] Update item in cart',
  DELETE_ITEM = '[Cart] Delete item from cart',
  ItemAdded = '[Cart] Item added to cart' // Quitar pq no hay llamadas a server?
}

export class AddItem implements Action { // will trigger either UpdateExistentItem or AddNewItem
  readonly type = CartActionTypes.ADD_ITEM;
  constructor(public cartProduct: CartProduct) {}
}

export class AddNewItem implements Action {
  readonly type = CartActionTypes.ADD_NEW_ITEM;
  constructor(public cartProduct: CartProduct) {}
}

export class UpdateExistentItem implements Action {
  readonly type = CartActionTypes.UPDATE_EXISTENT_ITEM;
  constructor(
    public cartProduct: CartProduct,
    public index: number
    ) {} // Pasar solo la nueva cantidad? // TODO: controlar los pudates de precios
}

export class DeleteItem implements Action {
  readonly type = CartActionTypes.DELETE_ITEM;
  constructor(public cartProduct: CartProduct) {}
}

export class ItemAdded implements Action {
  readonly type = CartActionTypes.ItemAdded;
  constructor(public payload: number) {}
}

export type CartAction = AddItem
  | AddNewItem
  | UpdateExistentItem
  | DeleteItem
  | ItemAdded;
