import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-floating-button-plus',
  templateUrl: './floating-button-plus.component.html',
  styleUrls: ['./floating-button-plus.component.css']
})
export class FloatingButtonPlusComponent {

  @Output() clicked = new EventEmitter<MouseEvent>();

  constructor() { }

  onClickButton() {
    this.clicked.emit();
  }
}
