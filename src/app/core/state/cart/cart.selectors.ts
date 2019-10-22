import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartState } from './cart.reducer';

export const selectCartState = createFeatureSelector<CartState>('cart');

export const selectOrder = createSelector(
  selectCartState,
  (state: CartState) => state.order
);

export const selectCartProducts = createSelector(
  selectCartState,
  (state: CartState) => state.order.cartProducts
);

export const selectCartProductsCount = createSelector(
  selectCartState,
  (state: CartState) => state.order.totalProducts
);

export const selectCartTotalPrice = createSelector(
  selectCartState,
  (state: CartState) => state.order.totalAmount
);
