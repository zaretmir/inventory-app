import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Order } from 'src/app/core/models/cart';
import { ProductApiService } from 'src/app/core/services/product-api.service';
import { Observable } from 'rxjs';
import { Item } from 'src/app/core/models/item';
import { CartFacade } from 'src/app/core/state/cart/cart.facade';
import { CartProduct } from 'src/app/core/models/cartProduct';

@Component({
  selector: 'app-cart-items-list',
  templateUrl: './cart-items-list.component.html',
  styleUrls: ['./cart-items-list.component.css']
})
export class CartItemsListComponent implements OnInit {

  @Input() cartProducts$: Observable<CartProduct[]>;
  @Output() removeProduct = new EventEmitter<CartProduct>();

  constructor() {
  }

  ngOnInit() {

  }

  onClickRemoveFromCart(cartProduct: CartProduct) {
    this.removeProduct.emit(cartProduct);
  }

  getItemDetails() {

  }

}
