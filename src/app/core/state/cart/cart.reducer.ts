import { CartActionTypes, CartAction} from './cart.actions';
import { Item } from '../../interfaces/item';
import { tassign } from 'tassign';

const addItem = (items: Item[], newItem: Item) => [...items, newItem];

export interface CartState {
  items: Item[];
  itemsCounter: number;
}

export const initialState: CartState  = {
  items: [],
  itemsCounter: 0
};

export function cartReducer(
  state: CartState = initialState, action: CartAction): CartState {
    switch (action.type) {
      case CartActionTypes.AddItem:
        return tassign(state, { items: addItem(state.items, action.item) });
      case CartActionTypes.IncrementItems:
        return tassign(state, { itemsCounter: state.itemsCounter + action.payload });
      default:
        return state;
    }
}
