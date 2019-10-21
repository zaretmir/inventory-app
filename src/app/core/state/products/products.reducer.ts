import { ProductsAction, ProductsActionTypes } from './products.actions';
import { Product } from '../../models/product';
import { tassign } from 'tassign'; // Type-safe, immutable
import { adaptError } from '../utils/store.utils';

const addProducts = (products: Product[], newProducts: Product[]) => [...products, ...newProducts];
const updatedProducts =
  (products: Product[], product: Product): Product[] => {
    return products.map(p => p.id === product.id ? product : p);
  };

export interface ProductsState {
  products: Product[];
  error: {
    status: number,
    message: string,
    url: string
  };
}

export const initialState: ProductsState  = {
  products: [],
  error: null
};

export function productsReducer(
  state: ProductsState = initialState, action: ProductsAction): ProductsState {
    switch (action.type) {
      case ProductsActionTypes.LOAD_PRODUCTS_SUCCESS:
        return tassign(state,
          {
            products: action.products,
            error: null
          });
      case ProductsActionTypes.LOAD_PRODUCTS_PAGE_SUCCESS:
        return tassign(state,
          {
            products: addProducts(state.products, action.products),
            error: null
          });
      case ProductsActionTypes.UPDATE_PRODUCT_SUCCESS:
        return tassign(state,
          {
            products: updatedProducts(state.products, action.product),
            error: null
          });
      case ProductsActionTypes.PRODUCT_REQUEST_FAIL:
        return tassign(state, { error: adaptError(action.payload) });
      default:
        return state;
    }

}

