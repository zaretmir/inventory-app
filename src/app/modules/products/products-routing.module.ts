import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsViewAllComponent } from './views/products-view-all/products-view-all.component';
import { ProductFormViewComponent } from './views/product-form-view/product-form-view.component';
import { ProductManageViewComponent } from './views/product-manage-view/product-manage-view.component';
import { ProductResolver } from 'src/app/core/resolvers/product-resolver';


const routes: Routes = [
  {
    path: '',
    component: ProductsViewAllComponent
  },
  {
    path: 'details/:productId',
    component: ProductManageViewComponent
  },
  {
    path: 'add',
    component: ProductFormViewComponent
  },
  {
    path: 'edit/:productId',
    component: ProductManageViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
