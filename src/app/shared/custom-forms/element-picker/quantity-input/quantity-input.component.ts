import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';

@Component({
  selector: 'app-quantity-input',
  templateUrl: './quantity-input.component.html',
  styleUrls: ['./quantity-input.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => QuantityInputComponent),
    multi: true
  }]
})
export class QuantityInputComponent implements ControlValueAccessor {

  @Output() clicked = new EventEmitter();

  quantity = 0;

  onChange: any = (quantity: number) => {};
  onTouch: any = () => {};

  writeValue(quantity: number): void {
    console.log('write value');
    this.quantity = quantity;
  }
  registerOnChange(fn: any): void {
    console.log('register on change');
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error("Method not implemented.");
  }



  constructor() { }

  stepUp() {
    console.log('stepup');
    this.quantity++;
    this.onChange(this.quantity);
  }

  stepDown() {
    console.log('stepdown');
    this.quantity--;
    this.onChange(this.quantity);
  }

  onClick() {
    console.log('clicked element');
    this.clicked.emit();
  }

}
