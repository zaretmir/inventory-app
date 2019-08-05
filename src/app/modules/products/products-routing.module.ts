import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsViewAllComponent } from './views/products-view-all/products-view-all.component';
import { ProductDetailedViewComponent } from './views/product-detailed-view/product-detailed-view.component';
import { ProductFormViewComponent } from './views/product-form-view/product-form-view.component';
import { ProductEditViewComponent } from './views/product-edit-view/product-edit-view.component';


const routes: Routes = [
  {
    path: '', component: ProductsViewAllComponent
  },
  {
    path: 'details', component: ProductDetailedViewComponent
  },
  {
    path: 'add', component: ProductFormViewComponent
  },
  {
    path: 'edit/:productid', component: ProductEditViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
