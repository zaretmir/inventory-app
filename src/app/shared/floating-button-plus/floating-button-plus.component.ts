import { Component, OnInit, Input, HostListener, Output, EventEmitter } from '@angular/core';
import { SidenavComponent } from 'src/app/modules/hangars/components/sidenav/sidenav.component';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-floating-button-plus',
  templateUrl: './floating-button-plus.component.html',
  styleUrls: ['./floating-button-plus.component.css']
})
export class FloatingButtonPlusComponent implements OnInit {

  @Input() routePath?: string;

  @Input() sidenavComponent?: SidenavComponent;

  @Output() clicked = new EventEmitter<MouseEvent>();

  @HostListener('click')
  click() {
    if (!isNullOrUndefined(this.sidenavComponent)) {
      this.sidenavComponent.toggle();
    }
  }
  constructor() { }

  ngOnInit() {
  }

  onClickButton(event) {
    this.clicked.emit(event);
  }



}
