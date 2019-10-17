import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { CartActionTypes, AddItem } from './cart.actions';
import { switchMap, withLatestFrom, map } from 'rxjs/operators';
import { EcommerceService } from '../../services/ecommerce.service';
import { CartState } from './cart.reducer';
import { AddProduct } from '../products/products.actions';
import { Item } from '../../models/item';

@Injectable()
export class CartEffects {

  constructor(
    private shopService: EcommerceService,
    private actions$: Actions,
    private store$: Store<CartState>) {}
}
