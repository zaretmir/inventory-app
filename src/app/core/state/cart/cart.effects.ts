import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { CartActionTypes, AddItem, UpdateExistentItem, AddNewItem } from './cart.actions';
import { switchMap, withLatestFrom, map } from 'rxjs/operators';
import { EcommerceService } from '../../services/ecommerce.service';
import { CartState } from './cart.reducer';
import { selectCartProducts } from './cart.selectors';
import { CartProduct } from '../../models/cartProduct';

@Injectable()
export class CartEffects {

  @Effect() updateCartOnAddProduct$: Observable<Action>
    = this.actions$.pipe(
      ofType(CartActionTypes.ADD_ITEM),
      withLatestFrom(this.store.select(selectCartProducts)),
      map(([action, currentProducts]: [AddItem, CartProduct[] ]) => {
        const index = currentProducts.findIndex(i => i.stockEntry.id === action.cartProduct.stockEntry.id);

        if (index === -1) {
          return new AddNewItem(action.cartProduct);
        }

        if (index !== -1) {
          return new UpdateExistentItem(action.cartProduct, index);
        }

      })
    );

  constructor(
    private shopService: EcommerceService,
    private actions$: Actions,
    private store: Store<CartState>) {}
}
