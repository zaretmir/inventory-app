import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsViewAllComponent } from './views/products-view-all/products-view-all.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductFormViewComponent } from './views/product-form-view/product-form-view.component';
import { PriceFormComponent } from './components/price-form/price-form.component';
import { ProductManagerNavComponent } from './components/product-manager-nav/product-manager-nav.component';
import { ProductManageViewComponent } from './views/product-manage-view/product-manage-view.component';
import { TranslateModule } from '@ngx-translate/core';

import {InfiniteScrollModule} from 'ngx-infinite-scroll';


@NgModule({
  declarations: [
    ProductsViewAllComponent,
    ProductCardComponent,
    ProductManageViewComponent,
    ProductFormComponent,
    ProductFormViewComponent,
    PriceFormComponent,
    ProductManagerNavComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    InfiniteScrollModule
  ]
})
export class ProductsModule { }
