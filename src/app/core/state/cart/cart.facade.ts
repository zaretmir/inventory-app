import { CartState } from './cart.reducer';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Item } from '../../interfaces/item';
import { Injectable } from '@angular/core';
import { CartActionTypes } from './cart.actions';
import * as CartActions from './cart.actions';

@Injectable({providedIn: 'root'})
export class CartFacade {

  itemsCount$: Observable<number>;
  items$: Observable<Item[]>;

  constructor(private store: Store<CartState>) {
    this.itemsCount$ = this.store.pipe(
      select('cart'),
      map((cartState: CartState) => cartState.itemsCounter)
    );
  }

  updateItemCount() {
    this.store.dispatch(new CartActions.IncrementItems(1));
  }

}
