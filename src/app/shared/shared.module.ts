import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FloatingButtonPlusComponent } from './floating-button-plus/floating-button-plus.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { StockEntryFormComponent } from './stock-entry-form/stock-entry-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [FloatingButtonPlusComponent, SearchbarComponent, StockEntryFormComponent],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    ReactiveFormsModule
  ],
  exports: [
    FloatingButtonPlusComponent,
    SearchbarComponent,
    StockEntryFormComponent
  ]
})
export class SharedModule { }
