import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiService } from 'src/app/core/services/api.service';

import { CoreModule } from 'src/app/core/core.module';
import { HangarsRoutingModule } from './hangars-routing.module';
import { FormsModule } from '@angular/forms';

import { HangarFormComponent } from './components/hangar-form/hangar-form.component';
import { HangarsComponent } from './pages/hangars/hangars.component';
import { HangarDetailedViewComponent } from './pages/hangar-detailed-view/hangar-detailed-view.component';


@NgModule({
  declarations: [HangarsComponent, HangarFormComponent, HangarDetailedViewComponent],
  imports: [
    CommonModule,
    HangarsRoutingModule,
    FormsModule
  ],
  providers: [// ¿proveer en el raíz?
    ApiService
  ]
})
export class HangarsModule { }
