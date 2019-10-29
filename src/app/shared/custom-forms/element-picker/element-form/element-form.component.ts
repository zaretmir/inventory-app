import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-element-form',
  templateUrl: './element-form.component.html',
  styleUrls: ['./element-form.component.css']
})
export class ElementFormComponent implements OnInit {

  @Input() element: any;
  @Input() group: FormGroup;
  @Input() isEdit: boolean;

  @Output() pick = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onUnselectElement() {
    this.pick.emit(this.element);
  }

}
