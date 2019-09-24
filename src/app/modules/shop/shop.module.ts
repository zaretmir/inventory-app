import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopRoutingModule } from './shop-routing.module';
import { CartDetailsComponent } from './views/cart-details/cart-details.component';
import { CartItemsListComponent } from './components/cart-items-list/cart-items-list.component';
import { CartExtrasTotalsComponent } from './components/cart-extras-totals/cart-extras-totals.component';



@NgModule({
  declarations: [
    CartDetailsComponent,
    CartItemsListComponent,
    CartExtrasTotalsComponent],
  imports: [
    CommonModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }
