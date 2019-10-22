import { CartActionTypes, CartAction} from './cart.actions';
import { tassign } from 'tassign';
import * as CartUtils from './cart.utils';
import { CartProduct } from '../../models/cartProduct';
import { Order } from '../../models/order';


export interface CartState {
  order: Order;
  /*
  cartProducts: CartProduct[];
  productsCounter: number;
  totalPrice: number;
  */
  error: any;
}

export const initialState: CartState  = {
  order : {
    id: null,
    user: null, // retrieve?,
    date: null, // set before post?
    cartProducts: [],
    totalProducts: 0,
    totalAmount: 0
  },
  error: null
};

/*
NB!!!: So far, tassign is not needed, as all values in store are being updated after every action.
It is left here intentionally foreseeing near-future needs. (maybe when handling errors?)
*/
export function cartReducer(
  state: CartState = initialState, action: CartAction): CartState {
    switch (action.type) {
      case CartActionTypes.ADD_NEW_ITEM:
        return tassign(
          state,
          {
            order: CartUtils.addNewCartProduct(state.order, action.cartProduct),
            error: null
          });
      case CartActionTypes.UPDATE_EXISTENT_ITEM:
        return tassign(
          state,
          {
            order: CartUtils.updateItemQuantity(state.order, action.cartProduct, action.index),
            error: null
          });
      case CartActionTypes.DELETE_ITEM:
        return tassign(
          state,
          {
            order: CartUtils.deleteItem(state.order, action.cartProduct),
            error: null
          });
      default:
        return state;
    }
}
