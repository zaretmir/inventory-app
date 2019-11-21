// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

// Components
import { SearchbarComponent } from './searchbar/searchbar.component';
import { StockEntryFormComponent } from './stock-entry-form/stock-entry-form.component';
import { ErrorToastComponent } from './error-toast/error-toast.component';
import { LoadingToastComponent } from './loading-toast/loading-toast.component';
import { TestFormComponent } from './custom-forms/test-form/test-form.component';
import { ElementPickerComponent } from './custom-forms/element-picker/element-picker.component';
import { QuantityInputComponent } from './custom-forms/quantity-input/quantity-input.component';
import { ElementFormComponent } from './custom-forms/element-picker/element-form/element-form.component';
import { StockEntryDataComponent } from './stock-entry-data/stock-entry-data.component';
import { FloatingButtonPlusComponent } from './buttons/floating-button-plus/floating-button-plus.component';
import { RoundIconButtonComponent } from './buttons/round-icon-button/round-icon-button.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { TextButtonComponent } from './buttons/text-button/text-button.component';
import { TextSquareButtonComponent } from './buttons/text-square-button/text-square-button.component';
import { CustomInputComponent } from './custom-forms/custom-input/custom-input.component';
import { AddressFormComponent } from './custom-forms/address-form/address-form.component';


@NgModule({
  declarations: [
    SearchbarComponent,
    StockEntryFormComponent,
    ErrorToastComponent,
    LoadingToastComponent,
    TestFormComponent,
    ElementPickerComponent,
    QuantityInputComponent,
    ElementFormComponent,
    StockEntryDataComponent,
    FloatingButtonPlusComponent,
    RoundIconButtonComponent,
    TextButtonComponent,
    TextSquareButtonComponent,
    CustomInputComponent,
    AddressFormComponent],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    ReactiveFormsModule,
    FormsModule,
    AngularSvgIconModule
  ],
  exports: [
    SearchbarComponent,
    StockEntryFormComponent,
    ErrorToastComponent,
    LoadingToastComponent,
    ElementPickerComponent,
    StockEntryDataComponent,
    TestFormComponent,
    FloatingButtonPlusComponent,
    QuantityInputComponent,
    RoundIconButtonComponent,
    TextButtonComponent,
    CustomInputComponent,
    AddressFormComponent
  ]
})
export class SharedModule { }
