import { Injectable } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProductsState } from './products.reducer';
import { Store, select } from '@ngrx/store';
import { map } from 'rxjs/operators';
import * as ProductsActions from './products.actions';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ProductsFacade {

  products$: Observable<Product[]>;

  constructor(private store: Store<ProductsState>) {
    this.products$ = this.store.pipe(
          select('products'),
          map((productsState: ProductsState) => productsState.products)
    );
  }

  loadAllProducts() {
    this.store.dispatch(new ProductsActions.LoadProducts());
  }

  loadProductsPage(page: number, items: number) {
    this.store.dispatch(new ProductsActions.LoadProductsPage(page, items));
  }

  setSelectedProductId(productId: number) {
    this.store.dispatch(new ProductsActions.SelectProduct(productId));
  }

}
