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
import { switchMap, map, tap } from 'rxjs/operators';
import { ProductApiService } from '../../services/product-api.service';
import { Product, ProductAdapter } from '../../models/product';
import { Router } from '@angular/router';

@Injectable()
export class ProductsEffects {
  @Effect() loadProducts$: Observable<Action>
  = this.actions$.pipe(
      ofType(ProductsActionTypes.LOAD_PRODUCTS),
      switchMap(() =>
        this.productsService
            .getAllProducts()
            .pipe(
              map((response: Product[]) => new ProductsLoaded(response)))
      )
    );

  @Effect() loadProductsPage$: Observable<Action>
    = this.actions$.pipe(
      ofType(ProductsActionTypes.LOAD_PRODUCTS_PAGE),
      switchMap((action: LoadProductsPage) =>
        this.productsService
            .getProductPage(action.page, action.items)
            .pipe(
              map((response: any) => new ProductsPageLoaded(response.content))
            ))
    );

  @Effect() addProduct$: Observable<Action>
    = this.actions$.pipe(
      ofType(ProductsActionTypes.ADD_PRODUCT),
      switchMap((action: AddProduct) =>
        this.productsService
          .postProduct(action.product)
          .pipe(
            map((response: Product) => new ProductAdded(response)))
      ));

  @Effect() updateProduct$: Observable<Action>
    = this.actions$.pipe(
      ofType(ProductsActionTypes.UPDATE_PRODUCT),
      switchMap((action: UpdateProduct) =>
        this.productsService
          .editProduct(action.product)
          .pipe(
            map((response: Product) => new ProductUpdated(this.adapter.adapt(response)))
          )
    ));

    @Effect({dispatch: false}) productUpdateSuccess$: Observable<Action>
    = this.actions$.pipe(
        ofType(ProductsActionTypes.UPDATE_PRODUCT_SUCCESS),
        tap(() => this.router.navigateByUrl('/home'))
    );

  constructor(
    private productsService: ProductApiService,
    private actions$: Actions,
    private router: Router,
    private adapter: ProductAdapter
  ) {}

}
