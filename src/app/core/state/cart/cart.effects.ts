import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { CartActionTypes } from './cart.actions';
import { switchMap } from 'rxjs/operators';
import { EcommerceService } from '../../services/ecommerce.service';

@Injectable()
export class CartEffects {

  constructor(
    private shopService: EcommerceService,
    private actions$: Actions) {}
}
