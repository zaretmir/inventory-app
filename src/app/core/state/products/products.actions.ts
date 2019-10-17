import { Action } from '@ngrx/store';
import { Product } from '../../models/product';

export enum ProductsActionTypes {
  SelectProduct = '[Products] Selected',
  LoadProducts = '[Products] Load all products data',
  LoadProductsWithPrice = '[Products] Load all products with price data',
  ProductsLoaded = '[Products] All products data loaded',
  LoadProductsPage = '[Products] Load products data page',
  ProductsPageLoaded = '[Products] Products data page loaded',
  AddProduct = '[Products] Add data',
  ProductAdded = '[Products] Data added',
  UpdateProduct = '[Products] Update data',
  ProductUpdated = '[Products] Data updated',
  DeleteProduct = '[Products] Delete data'
}

export class SelectProduct implements Action {
  readonly type = ProductsActionTypes.SelectProduct;
  constructor(public productId: number) {}
}

export class LoadProducts implements Action {
  readonly type = ProductsActionTypes.LoadProducts;
}

export class LoadProductsWithPrice implements Action {
  readonly type = ProductsActionTypes.LoadProductsWithPrice;
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
  constructor(public product: Product) {}
}

export class ProductAdded implements Action {
  readonly type = ProductsActionTypes.ProductAdded;
  constructor(public product: Product) {}
}

export class UpdateProduct implements Action {
  readonly type = ProductsActionTypes.UpdateProduct;
  constructor(public product: Product) {}
}

export class ProductUpdated implements Action {
  readonly type = ProductsActionTypes.ProductUpdated;
  constructor(public product: Product) {}
}

export class DeleteProduct implements Action {
  readonly type = ProductsActionTypes.DeleteProduct;
  constructor(public payload: number) {}
}

export type ProductsAction = SelectProduct
  | LoadProducts
  | LoadProductsWithPrice
  | ProductsLoaded
  | LoadProductsPage
  | ProductsPageLoaded
  | AddProduct
  | ProductAdded
  | UpdateProduct
  | ProductUpdated
  | DeleteProduct;
