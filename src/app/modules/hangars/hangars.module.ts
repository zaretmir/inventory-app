import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HangarsRoutingModule } from './hangars-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HangarFormComponent } from './components/hangar-form/hangar-form.component';
import { HangarsComponent } from './views/hangars/hangars.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HangarFormViewComponent } from './views/hangar-form-view/hangar-form-view.component';

import { TranslateModule } from '@ngx-translate/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { HangarManageViewComponent } from './views/hangar-manage-view/hangar-manage-view.component';
import { ChartsModule } from 'ng2-charts';
import { StockEntryDataComponent } from 'src/app/shared/stock-entry-data/stock-entry-data.component';
import { AngularSvgIconModule } from 'angular-svg-icon';


@NgModule({
  declarations: [
    HangarsComponent,
    HangarFormComponent,
    SidenavComponent,
    HangarFormViewComponent,
    HangarManageViewComponent],
  imports: [
    CommonModule,
    HangarsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    TranslateModule,
    NgxPaginationModule,
    ChartsModule,
    AngularSvgIconModule
  ],
  providers: [// ¿proveer en el raíz?
  ]
})
export class HangarsModule {

 }
