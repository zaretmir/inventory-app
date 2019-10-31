import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartDetailsComponent } from './views/cart-details/cart-details.component';
import { ShoppingViewComponent } from './views/shopping-view/shopping-view.component';

const routes: Routes = [
  {
    path: 'products',
    component: ShoppingViewComponent
  },
  {
    path: 'cart',
    component: CartDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
