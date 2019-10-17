import { CartActionTypes, CartAction} from './cart.actions';
import { Item } from '../../models/item';
import { tassign } from 'tassign';
import * as CartUtils from './cart.utils';
import { CartProduct } from '../../models/cartProduct';


export interface CartState {
  cartProducts: CartProduct[];
  productsCounter: number;
  totalPrice: number;
}

export const initialState: CartState  = {
  cartProducts: [],
  productsCounter: 0,
  totalPrice: 0
};

export function cartReducer(
  state: CartState = initialState, action: CartAction): CartState {
    switch (action.type) {
      case CartActionTypes.AddItem:
        return tassign(
          state,
          CartUtils.updatedCartState(state, CartUtils.addItem(state.cartProducts, action.cartProduct)));
      case CartActionTypes.DeleteItem:
        return tassign(
          state,
          CartUtils.updatedCartState(state, CartUtils.deleteItem(state.cartProducts, action.cartProduct)));
      default:
        return state;
    }
}
