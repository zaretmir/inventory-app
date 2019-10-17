import { CartState } from './cart.reducer';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Item } from '../../models/item';
import { Injectable } from '@angular/core';
import { CartActionTypes } from './cart.actions';
import * as CartActions from './cart.actions';
import { CartProduct } from '../../models/cartProduct';

@Injectable({providedIn: 'root'})
export class CartFacade {

  cartProducts$: Observable<CartProduct[]>;
  productsCount$: Observable<number>;
  totalPrice$: Observable<number>;

  constructor(private store: Store<CartState>) {

    this.cartProducts$ = this.store.pipe(
      select('cart'),
      map((cartState: CartState) => cartState.cartProducts)
      );

    this.productsCount$ = this.store.pipe(
      select('cart'),
      map((cartState: CartState) => cartState.productsCounter)
      );

    this.totalPrice$ = this.store.pipe(
      select('cart'),
      map((cartState: CartState) => cartState.totalPrice)
      );
    }

  addCartProductToCart(cartProduct: CartProduct) {
    console.log('facade');
    this.store.dispatch(new CartActions.AddItem(cartProduct));
  }

  removeProductFromCart(cartProduct: CartProduct) {
    this.store.dispatch(new CartActions.DeleteItem(cartProduct));
  }

}
