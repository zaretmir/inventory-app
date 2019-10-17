import { ProductsAction, ProductsActionTypes } from './products.actions';
import { Product } from '../../models/product';
import { tassign } from 'tassign'; // Type-safe, immutable

const addProducts = (products: Product[], newProducts: Product[]) => [...products, ...newProducts];
const updatedProducts =
  (products: Product[], product: Product): Product[] =>
    products.map(p => p.id === product.id ? product : p);

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
      case ProductsActionTypes.ProductUpdated:
        return tassign(state, { products: updatedProducts(this.products, action.product)});
      default:
        return state;
    }

}

