import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { ofType, Actions, Effect } from '@ngrx/effects';
import {
  ProductsActionTypes,
  ProductsLoaded,
  ProductsPageLoaded,
  LoadProductsPage,
  UpdateProduct,
  ProductUpdated,
  AddProduct,
  ProductAdded} from './products.actions';
import { switchMap, map, filter } from 'rxjs/operators';
import { ProductApiService } from '../../services/product-api.service';
import { Product } from '../../models/product';

@Injectable()
export class ProductsEffects {
  @Effect() loadProducts$: Observable<Action>
  = this.actions$.pipe(
      ofType(ProductsActionTypes.LoadProducts),
      switchMap(() =>
        this.productsService
            .getAllProducts()
            .pipe(
              map((response: Product[]) => new ProductsLoaded(response)))
      )
    );

  @Effect() loadProductsPage$: Observable<Action>
    = this.actions$.pipe(
      ofType(ProductsActionTypes.LoadProductsPage),
      switchMap((action: LoadProductsPage) =>
        this.productsService
            .getProductPage(action.page, action.items)
            .pipe(
              map((response: any) => new ProductsPageLoaded(response.content))
            ))
    );

  @Effect() addProduct$: Observable<Action>
    = this.actions$.pipe(
      ofType(ProductsActionTypes.AddProduct),
      switchMap((action: AddProduct) =>
        this.productsService
          .postProduct(action.product)
          .pipe(
            map((response: Product) => new ProductAdded(response)))
      ));

  @Effect() updateProduct$: Observable<Action>
    = this.actions$.pipe(
      ofType(ProductsActionTypes.UpdateProduct),
      switchMap((action: UpdateProduct) =>
        this.productsService
          .editProduct(action.product)
          .pipe(
            map((response: Product) => new ProductUpdated(response)))
          )
    );

  constructor(
    private productsService: ProductApiService,
    private actions$: Actions
  ) {}

}
