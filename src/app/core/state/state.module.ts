import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { rootReducers } from '.';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from './products/products.effects';
import { HangarsEffects } from './hangars/hangars.effects';
import { CartEffects } from './cart/cart.effects';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(rootReducers),
    EffectsModule.forRoot([
      ProductsEffects,
      HangarsEffects,
      CartEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 10 })
  ]
})
export class StateModule { }
