import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsViewAllComponent } from './views/products-view-all/products-view-all.component';
import { ProductDetailedViewComponent } from './views/product-detailed-view/product-detailed-view.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductFormViewComponent } from './views/product-form-view/product-form-view.component';


const routes: Routes = [
  {
    path: '', component: ProductsViewAllComponent
  },
  {
    path: 'details', component: ProductDetailedViewComponent
  },
  {
    path: 'add', component: ProductFormViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
