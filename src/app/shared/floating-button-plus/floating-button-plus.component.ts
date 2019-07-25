import { Component, OnInit, Input, HostListener } from '@angular/core';
import { SidenavComponent } from 'src/app/modules/hangars/components/sidenav/sidenav.component';

@Component({
  selector: 'app-floating-button-plus',
  templateUrl: './floating-button-plus.component.html',
  styleUrls: ['./floating-button-plus.component.css']
})
export class FloatingButtonPlusComponent implements OnInit {

  @Input() routePath?: string;

  @Input() sidenavComponent?: SidenavComponent;

  @HostListener('click')
  click() {
    this.sidenavComponent.toggle();
  }
  constructor() { }

  ngOnInit() {
  }

}
