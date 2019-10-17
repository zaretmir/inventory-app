import { Injectable } from '@angular/core';
import { Product } from '../../models/product';
import { ProductsState } from './products.reducer';
import { Store, select } from '@ngrx/store';
import { map } from 'rxjs/operators';
import * as ProductsActions from './products.actions';
import { Observable } from 'rxjs';
import { selectCurrentProduct, selectAllProducts, selectProductId } from './products.selectors';

@Injectable({providedIn: 'root'})
export class ProductsFacade {

  products$: Observable<Product[]>;
  selectedProduct$: Observable<Product>;
  selectedProductId$: Observable<number>;

  constructor(private store: Store<ProductsState>) {
    this.products$ = this.store.select(selectAllProducts);
    this.selectedProductId$ = this.store.select(selectProductId);
    this.selectedProduct$ = this.store.select(selectCurrentProduct);
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

  setSelectedProductId(productId: number) {
    this.store.dispatch(new ProductsActions.SelectProduct(productId));
  }

}
