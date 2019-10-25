import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-element-input',
  templateUrl: './element-input.component.html',
  styleUrls: ['./element-input.component.css']
})
export class ElementInputComponent implements OnInit {

  @Input() element: any;
  @Output() clicked = new EventEmitter();

  quantityForm: FormGroup;

  constructor() {
    this.quantityForm = new FormGroup({
      quantityControl: new FormControl(1)
    });
  }

  ngOnInit() {
  }

  stepUp() {
    console.log('stepup');
    this.quantityForm.controls.quantityControl.setValue(
      this.quantityForm.controls.quantityControl.value + 1);
  }

  stepDown() {
    console.log('stepdown');
    if (this.quantityForm.controls.quantityControl.value - 1 < 1) {
      return;
    }
    this.quantityForm.controls.quantityControl.setValue(
      this.quantityForm.controls.quantityControl.value - 1);
  }

  onClick() {
    console.log('clicked element');
    this.clicked.emit();
  }

}
