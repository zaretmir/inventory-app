import { Action } from '@ngrx/store';
import { Product } from '../../models/product';

export enum ProductsActionTypes {
  LOAD_PRODUCTS = '[Products] Load all products data',
  LOAD_PRODUCTS_WITH_PRICE = '[Products] Load all products with price data',
  LOAD_PRODUCTS_SUCCESS = '[Products] All products data loaded',
  LOAD_PRODUCTS_PAGE = '[Products] Load products data page',
  LOAD_PRODUCTS_PAGE_SUCCESS = '[Products] Products data page loaded',
  ADD_PRODUCT = '[Products] Add data',
  ADD_PRODUCT_SUCCESS = '[Products] Data added',
  UPDATE_PRODUCT = '[Products] Update data',
  UPDATE_PRODUCT_SUCCESS = '[Products] Data updated',
  DELETE_PRODUCT = '[Products] Delete data'
}

export class LoadProducts implements Action {
  readonly type = ProductsActionTypes.LOAD_PRODUCTS;
}

export class LoadProductsWithPrice implements Action {
  readonly type = ProductsActionTypes.LOAD_PRODUCTS_WITH_PRICE;
}

export class ProductsLoaded implements Action {
  readonly type = ProductsActionTypes.LOAD_PRODUCTS_SUCCESS;
  constructor(public products: Product[]) {}
}

export class LoadProductsPage implements Action {
  readonly type = ProductsActionTypes.LOAD_PRODUCTS_PAGE;
    constructor(
      public page: number,
      public items: number) {}
}

export class ProductsPageLoaded implements Action {
  readonly type = ProductsActionTypes.LOAD_PRODUCTS_PAGE_SUCCESS;
  constructor(public products: Product[]) {}
}

export class AddProduct implements Action {
  readonly type = ProductsActionTypes.ADD_PRODUCT;
  constructor(public product: Product) {}
}

export class ProductAdded implements Action {
  readonly type = ProductsActionTypes.ADD_PRODUCT_SUCCESS;
  constructor(public product: Product) {}
}

export class UpdateProduct implements Action {
  readonly type = ProductsActionTypes.UPDATE_PRODUCT;
  constructor(public product: Product) {}
}

export class ProductUpdated implements Action {
  readonly type = ProductsActionTypes.UPDATE_PRODUCT_SUCCESS;
  constructor(public product: Product) {}
}

export class DeleteProduct implements Action {
  readonly type = ProductsActionTypes.DELETE_PRODUCT;
  constructor(public payload: number) {}
}

export type ProductsAction = LoadProducts
  | LoadProductsWithPrice
  | ProductsLoaded
  | LoadProductsPage
  | ProductsPageLoaded
  | AddProduct
  | ProductAdded
  | UpdateProduct
  | ProductUpdated
  | DeleteProduct;
