import { CartState } from './cart.reducer';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Item } from '../../models/item';
import { Injectable } from '@angular/core';
import { CartActionTypes } from './cart.actions';
import * as CartActions from './cart.actions';
import { CartProduct } from '../../models/cartProduct';
import { selectCartProducts, selectCartProductsCount, selectCartTotalPrice } from './cart.selectors';

@Injectable({providedIn: 'root'})
export class CartFacade {

  cartProducts$: Observable<CartProduct[]>;
  productsCount$: Observable<number>;
  totalPrice$: Observable<number>;

  constructor(private store: Store<CartState>) {

    this.cartProducts$ = this.store.select(selectCartProducts);
    this.productsCount$ = this.store.select(selectCartProductsCount);
    this.totalPrice$ = this.store.select(selectCartTotalPrice);
  }

  addCartProductToCart(cartProduct: CartProduct) {
    console.log('facade');
    this.store.dispatch(new CartActions.AddItem(cartProduct));
  }

  removeProductFromCart(cartProduct: CartProduct) {
    this.store.dispatch(new CartActions.DeleteItem(cartProduct));
  }

}
