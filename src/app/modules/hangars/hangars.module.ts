import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HangarsRoutingModule } from './hangars-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HangarFormComponent } from './components/hangar-form/hangar-form.component';
import { HangarsComponent } from './views/hangars/hangars.component';
import { HangarDetailedViewComponent } from './views/hangar-detailed-view/hangar-detailed-view.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HangarFormViewComponent } from './views/hangar-form-view/hangar-form-view.component';
import { HangarEditViewComponent } from './views/hangar-edit-view/hangar-edit-view.component';
import { HangarManageViewComponent } from './views/hangar-manage-view/hangar-manage-view.component';

import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProductsExcerptsComponent } from './components/products-excerpts/products-excerpts.component';


@NgModule({
  declarations: [
    HangarsComponent,
    HangarFormComponent,
    HangarDetailedViewComponent,
    SidenavComponent,
    HangarFormViewComponent,
    HangarEditViewComponent,
    HangarManageViewComponent,
    ProductsExcerptsComponent],
  imports: [
    CommonModule,
    HangarsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    TranslateModule,
    NgxPaginationModule
  ],
  providers: [// ¿proveer en el raíz?
  ]
})
export class HangarsModule {

 }
