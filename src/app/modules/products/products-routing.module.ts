import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsViewAllComponent } from './views/products-view-all/products-view-all.component';


const routes: Routes = [
  {
    path: '', component: ProductsViewAllComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
