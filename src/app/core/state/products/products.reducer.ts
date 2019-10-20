import { ProductsAction, ProductsActionTypes } from './products.actions';
import { Product } from '../../models/product';
import { tassign } from 'tassign'; // Type-safe, immutable

const addProducts = (products: Product[], newProducts: Product[]) => [...products, ...newProducts];
const updatedProducts =
  (products: Product[], product: Product): Product[] => {
    return products.map(p => p.id === product.id ? product : p);
  };

export interface ProductsState {
  products: Product[];
}

export const initialState: ProductsState  = {
  products: [],
};

export function productsReducer(
  state: ProductsState = initialState, action: ProductsAction): ProductsState {
    switch (action.type) {
      case ProductsActionTypes.LOAD_PRODUCTS_SUCCESS:
        return tassign(state, { products: action.products });
      case ProductsActionTypes.LOAD_PRODUCTS_PAGE_SUCCESS:
        return tassign(state, { products: addProducts(state.products, action.products) });
      case ProductsActionTypes.UPDATE_PRODUCT_SUCCESS:
        return tassign(state, { products: updatedProducts(state.products, action.product)});
      default:
        return state;
    }

}

