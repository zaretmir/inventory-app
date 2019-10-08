import { Action } from '@ngrx/store';
import { Product } from '../../interfaces/product';

export enum ProductsActionTypes {
  SelectProduct = '[Products] Selected',
  LoadProducts = '[Products] Load all products data',
  ProductsLoaded = '[Products] All products data loaded',
  LoadProductsPage = '[Products] Load products data page',
  ProductsPageLoaded = '[Products] Products data page loaded',
  AddProduct = '[Products] Add data',
  UpdateProduct = '[Products] Update data',
  DeleteProduct = '[Products] Delete data'
}

export class SelectProduct implements Action {
  readonly type = ProductsActionTypes.SelectProduct;
  constructor(public productId: number) {}
}

export class LoadProducts implements Action {
  readonly type = ProductsActionTypes.LoadProducts;
}

export class ProductsLoaded implements Action {
  readonly type = ProductsActionTypes.ProductsLoaded;
  constructor(public products: Product[]) {}
}

export class LoadProductsPage implements Action {
  readonly type = ProductsActionTypes.LoadProductsPage;
    constructor(
      public page: number,
      public items: number) {}
}

export class ProductsPageLoaded implements Action {
  readonly type = ProductsActionTypes.ProductsPageLoaded;
  constructor(public products: Product[]) {}
}

export class AddProduct implements Action {
  readonly type = ProductsActionTypes.AddProduct;
  constructor(public payload: number) {}
}

export class UpdateProduct implements Action {
  readonly type = ProductsActionTypes.UpdateProduct;
  constructor(public payload: number) {}
}

export class DeleteProduct implements Action {
  readonly type = ProductsActionTypes.DeleteProduct;
  constructor(public payload: number) {}
}

export type ProductsAction = SelectProduct
  | LoadProducts
  | ProductsLoaded
  | LoadProductsPage
  | ProductsPageLoaded
  | AddProduct
  | UpdateProduct
  | DeleteProduct;
