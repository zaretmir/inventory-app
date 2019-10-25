import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css'],
  providers: [{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent ),
      multi: true
    }]
})
export class CustomInputComponent implements ControlValueAccessor {

  hangars = [
    {id: 1, name: 'opcion 1'},
    {id: 2, name: 'opcion 2'},
    {id: 3, name: 'opcion 3'}
  ];

  hangars$ = of(this.hangars);

  filteredHangars$: Observable<any[]>;

  constructor() { }

  @Input() label: string;
  //@Input() hangars: any[];

  //selectControl: FormControl = new FormControl();

  public _value: string;
  public isDisabled: boolean;
  onChange: any = () => {};
  onTouch: any = () => {};

  onInput(value: string) {
    this._value = value;
    this.onChange(this._value);
    //this.filterDropdown(this._value);
    console.log('onInput: ' + this._value);
  }


/*
  filterDropdown(value: string) {
    this.selectControl.patchValue(this.hangars.filter(h => h.name.includes(this._value)));
  }*/


  writeValue(val): void {
    this._value = val;
    console.log('wirteval');
    //this.filterDropdown(val);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }




}
