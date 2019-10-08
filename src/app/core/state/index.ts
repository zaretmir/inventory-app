import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  State
} from '@ngrx/store';
import { environment } from '../../../environments/environment';

import * as fromCart from './cart/cart.reducer';
import * as fromProducts from './products/products.reducer';
import * as fromHangars from './hangars/hangars.reducer';

export interface RootState {
  cart: fromCart.CartState;
  products: fromProducts.ProductsState;
  hangars: fromHangars.HangarsState;
}

export const rootReducers: ActionReducerMap<RootState> = {
  cart: fromCart.cartReducer,
  products: fromProducts.productsReducer,
  hangars: fromHangars.hangarsReducer
};

export const metaReducers: MetaReducer<RootState>[] = !environment.production ? [] : [];
