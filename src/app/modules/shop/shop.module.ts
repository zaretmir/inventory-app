import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopRoutingModule } from './shop-routing.module';
import { CartDetailsComponent } from './views/cart-details/cart-details.component';
import { CartItemsListComponent } from './components/cart-items-list/cart-items-list.component';
import { CartExtrasTotalsComponent } from './components/cart-extras-totals/cart-extras-totals.component';
import { ShoppingViewComponent } from './views/shopping-view/shopping-view.component';
import { ProductShopCardComponent } from './components/product-shop-card/product-shop-card.component';



@NgModule({
  declarations: [
    CartDetailsComponent,
    CartItemsListComponent,
    CartExtrasTotalsComponent,
    ProductShopCardComponent,
    ShoppingViewComponent],
  imports: [
    CommonModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }
