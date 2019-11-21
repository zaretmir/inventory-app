import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dropdown',
  templateUrl: './user-dropdown.component.html',
  styleUrls: ['./user-dropdown.component.scss']
})
export class UserDropdownComponent {

  show = false;

  constructor() { }

  toggle(show: boolean = !this.show) {
    this.show = show;
  }

}
