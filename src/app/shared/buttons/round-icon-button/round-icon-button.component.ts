import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

export enum Icon {
  edit = 'assets/icons/pencil-edit-button.svg',
  delete = 'assets/icons/rubbish-bin.svg',
  view = 'assets/icons/visibility-button.svg',
  plus = 'assets/icons/plus.svg',
  user = 'assets/icons/user.svg',
  globe = 'assets/icons/worldwide.svg',
  cart = 'assets/icons/cart-solid.svg',
  cartCheckout = 'assets/icons/cart-checkout.svg',
  menu = 'assets/icons/burger-menu.svg'
}

@Component({
  selector: 'app-round-icon-button',
  templateUrl: './round-icon-button.component.html',
  styleUrls: ['./round-icon-button.component.scss']
})
export class RoundIconButtonComponent implements OnInit {

  @Input() iconType = Icon.view; // default
  @Input() buttonClass = '';

  constructor() { }

  ngOnInit() {
  }

}
