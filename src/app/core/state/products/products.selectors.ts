import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ProductsState } from './products.reducer';
import { Product } from '../../models/product';
import * as fromRouter from '../router/router.selectors';

export const selectProductsState = createFeatureSelector<ProductsState>('products');

export const selectAllProducts = createSelector(
  selectProductsState,
  (state: ProductsState) => state.products
);

export const selectCurrentProduct = createSelector(
  selectAllProducts,
  fromRouter.selectParamProductId,
  (allProducts: Product[], productId: string): Product => {
    return productId && allProducts.find(product => product.id === +productId);
  }
);

export const selectError = createSelector(
  selectProductsState,
  (state: ProductsState) => state.error
);

