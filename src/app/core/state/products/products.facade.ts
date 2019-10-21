import { Injectable } from '@angular/core';
import { Product } from '../../models/product';
import { ProductsState } from './products.reducer';
import { Store } from '@ngrx/store';
import * as ProductsActions from './products.actions';
import { Observable } from 'rxjs';
import { selectCurrentProduct, selectAllProducts, selectError } from './products.selectors';

@Injectable({providedIn: 'root'})
export class ProductsFacade {

  products$: Observable<Product[]>;
  selectedProduct$: Observable<Product>;
  error$: Observable<any>;

  constructor(private store: Store<ProductsState>) {
    this.products$ = this.store.select(selectAllProducts);
    this.selectedProduct$ = this.store.select(selectCurrentProduct);
    this.error$ = this.store.select(selectError);
  }

  loadAllProducts() {
    this.store.dispatch(new ProductsActions.LoadProducts());
  }

  loadProductsPage(page: number, items: number) {
    this.store.dispatch(new ProductsActions.LoadProductsPage(page, items));
  }

  addProduct(product: Product) {
    this.store.dispatch(new ProductsActions.AddProduct(product));
  }

  updateProduct(product: Product) {
    this.store.dispatch(new ProductsActions.UpdateProduct(product));
  }
}
