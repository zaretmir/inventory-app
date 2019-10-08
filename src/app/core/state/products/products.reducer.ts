import { ProductsAction, ProductsActionTypes } from './products.actions';
import { Product } from '../../interfaces/product';
import { tassign } from 'tassign'; // Type-safe, immutable

const addProducts = (products: Product[], newProducts: Product[]) => [...products, ...newProducts];

export interface ProductsState {
  products: Product[];
  selectedProductId: number;
}

export const initialState: ProductsState  = {
  products: [],
  selectedProductId: null
};

export function productsReducer(
  state: ProductsState = initialState, action: ProductsAction): ProductsState {
    switch (action.type) {
      case ProductsActionTypes.ProductsLoaded:
        return tassign(state, { products: action.products });
      case ProductsActionTypes.ProductsPageLoaded:
        return tassign(state, { products: addProducts(state.products, action.products) });
      case ProductsActionTypes.SelectProduct:
        return tassign(state, { selectedProductId: action.productId});
      default:
        return state;
    }

}

