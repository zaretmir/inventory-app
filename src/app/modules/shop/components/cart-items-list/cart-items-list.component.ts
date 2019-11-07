import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { CartProduct } from 'src/app/core/models/cartProduct';

@Component({
  selector: 'app-cart-items-list',
  templateUrl: './cart-items-list.component.html',
  styleUrls: ['./cart-items-list.component.scss']
})
export class CartItemsListComponent implements OnInit {

  @Input() cartProducts$: Observable<CartProduct[]>;
  @Output() removeProduct = new EventEmitter<CartProduct>();

  constructor() {
  }

  ngOnInit() {

  }

}
