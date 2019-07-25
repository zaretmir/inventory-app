import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiService } from 'src/app/core/services/api.service';

import { HangarsRoutingModule } from './hangars-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HangarFormComponent } from './components/hangar-form/hangar-form.component';
import { HangarsComponent } from './views/hangars/hangars.component';
import { HangarDetailedViewComponent } from './views/hangar-detailed-view/hangar-detailed-view.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HangarFormViewComponent } from './views/hangar-form-view/hangar-form-view.component';


@NgModule({
  declarations: [HangarsComponent, HangarFormComponent, HangarDetailedViewComponent, SidenavComponent, HangarFormViewComponent],
  imports: [
    CommonModule,
    HangarsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [// ¿proveer en el raíz?
    ApiService
  ]
})
export class HangarsModule { }
