import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';

import { RouterReducerState, routerReducer } from '@ngrx/router-store';

import * as fromRouter from './router/router.reducer';
import * as fromCart from './cart/cart.reducer';
import * as fromProducts from './products/products.reducer';
import * as fromHangars from './hangars/hangars.reducer';
import * as fromAuth from './auth/auth.reducer';
import * as fromStock from './stock/stock.reducer';


export interface RootState {
  router: RouterReducerState<fromRouter.RouterStateUrl>; // ngrx-router-store
  cart: fromCart.CartState;
  products: fromProducts.ProductsState;
  hangars: fromHangars.HangarsState;
  auth: fromAuth.AuthState;
  stock: fromStock.StockState;
}

export const rootReducers: ActionReducerMap<RootState> = {
  router: routerReducer, // ngrx-router-store
  cart: fromCart.cartReducer,
  products: fromProducts.productsReducer,
  hangars: fromHangars.hangarsReducer,
  auth: fromAuth.authReducer,
  stock: fromStock.stockReducer
};

export const metaReducers: MetaReducer<RootState>[] = !environment.production ? [] : [];
