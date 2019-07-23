import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiService } from 'src/app/core/services/api.service';

import { CoreModule } from 'src/app/core/core.module';
import { HangarsRoutingModule } from './hangars-routing.module';
import { FormsModule } from '@angular/forms';

import { HangarFormComponent } from './components/hangar-form/hangar-form.component';
import { HangarsComponent } from './views/hangars/hangars.component';
import { HangarDetailedViewComponent } from './views/hangar-detailed-view/hangar-detailed-view.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';


@NgModule({
  declarations: [HangarsComponent, HangarFormComponent, HangarDetailedViewComponent, SidenavComponent],
  imports: [
    CommonModule,
    HangarsRoutingModule,
    FormsModule,
    SharedModule
  ],
  providers: [// ¿proveer en el raíz?
    ApiService
  ]
})
export class HangarsModule { }
