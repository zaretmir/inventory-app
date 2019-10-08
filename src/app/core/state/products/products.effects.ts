import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { ofType, Actions, Effect } from '@ngrx/effects';
import { ProductsActionTypes, ProductsLoaded, ProductsPageLoaded, LoadProductsPage } from './products.actions';
import { switchMap, map } from 'rxjs/operators';
import { ProductApiService } from '../../services/product-api.service';
import { Product } from '../../interfaces/product';

@Injectable()
export class ProductsEffects {
  @Effect() loadProducts$: Observable<Action>
  = this.actions$.pipe(
      ofType(ProductsActionTypes.LoadProducts),
      switchMap(() =>
        this.productsService
            .getAllProducts()
            .pipe(map((response: Product[]) => new ProductsLoaded(response)))
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

  constructor(
    private productsService: ProductApiService,
    private actions$: Actions
  ) {}

}
