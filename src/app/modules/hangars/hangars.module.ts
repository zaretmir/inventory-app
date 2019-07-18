import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HangarsRoutingModule } from './hangars-routing.module';
import { HangarsSearchResultsComponent } from './pages/hangars-search-results/hangars-search-results.component';
import { ApiService } from 'src/app/core/services/api.service';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [HangarsSearchResultsComponent],
  imports: [
    CommonModule,
    HangarsRoutingModule
  ],
  providers: [// ¿proveer en el raíz?
    ApiService
  ]
})
export class HangarsModule { }
