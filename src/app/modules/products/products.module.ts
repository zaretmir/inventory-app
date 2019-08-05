import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsViewAllComponent } from './views/products-view-all/products-view-all.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductDetailedViewComponent } from './views/product-detailed-view/product-detailed-view.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductFormViewComponent } from './views/product-form-view/product-form-view.component';
import { PriceFormComponent } from './components/price-form/price-form.component';
import { ProductManagerNavComponent } from './components/product-manager-nav/product-manager-nav.component';
import { ProductEditViewComponent } from './views/product-edit-view/product-edit-view.component';


@NgModule({
  declarations: [ProductsViewAllComponent, ProductCardComponent, ProductDetailedViewComponent, ProductFormComponent, ProductFormViewComponent, PriceFormComponent, ProductManagerNavComponent, ProductEditViewComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
