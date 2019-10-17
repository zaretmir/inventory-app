import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ProductsState } from './products.reducer';
import { Product } from '../../models/product';

export const selectProductsState = createFeatureSelector<ProductsState>('products');

export const selectProductId = createSelector(
  selectProductsState,
  (state: ProductsState) => state.selectedProductId
);

export const selectAllProducts = createSelector(
  selectProductsState,
  (state: ProductsState) => state.products
);

export const selectCurrentProduct = createSelector(
  selectProductId,
  selectAllProducts,
  (selectedProductId: number, allProducts: Product[]) => {
    if (selectedProductId && allProducts) {
      console.log('running selector');
      return allProducts.find(product => product.id === selectedProductId);
    }
  }
);

