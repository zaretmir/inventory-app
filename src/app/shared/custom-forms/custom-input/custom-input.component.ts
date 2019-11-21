import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss']
})
export class CustomInputComponent implements OnInit {

  @Input() _label: string;
  @Input() _inputType = 'text';
  @Input() _formControlName: string;
  @Input() parentForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  get _formControl() { return this.parentForm.get(this._formControlName); }

}
