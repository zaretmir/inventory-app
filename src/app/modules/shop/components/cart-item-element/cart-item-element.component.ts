import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CartProduct } from 'src/app/core/models/cartProduct';
import { Icon } from 'src/app/shared/buttons/round-icon-button/round-icon-button.component';

@Component({
  selector: 'app-cart-item-element',
  templateUrl: './cart-item-element.component.html',
  styleUrls: ['./cart-item-element.component.scss']
})
export class CartItemElementComponent implements OnInit {

  @Input() cartProduct: CartProduct;
  @Output() removeProduct = new EventEmitter<CartProduct>();

  iconTypes = Icon;

  constructor() { }

  ngOnInit() {
  }

  onClickRemoveFromCart(cartProduct: CartProduct) {
    this.removeProduct.emit(cartProduct);
  }

  getItemDetails() {

  }

}
