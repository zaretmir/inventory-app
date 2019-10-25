import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FloatingButtonPlusComponent } from './floating-button-plus/floating-button-plus.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { StockEntryFormComponent } from './stock-entry-form/stock-entry-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorToastComponent } from './error-toast/error-toast.component';
import { LoadingToastComponent } from './loading-toast/loading-toast.component';
import { CustomInputComponent } from './custom-forms/custom-input/custom-input.component';
import { TestFormComponent } from './custom-forms/test-form/test-form.component';
import { ElementPickerComponent } from './custom-forms/element-picker/element-picker.component';
import { ElementInputComponent } from './custom-forms/element-picker/element-input/element-input.component';



@NgModule({
  declarations: [
    FloatingButtonPlusComponent,
    SearchbarComponent,
    StockEntryFormComponent,
    ErrorToastComponent,
    LoadingToastComponent,
    CustomInputComponent,
    TestFormComponent,
    ElementPickerComponent,
    ElementInputComponent],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    ReactiveFormsModule
  ],
  exports: [
    FloatingButtonPlusComponent,
    SearchbarComponent,
    StockEntryFormComponent,
    ErrorToastComponent,
    LoadingToastComponent
  ]
})
export class SharedModule { }
