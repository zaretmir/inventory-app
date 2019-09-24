import { Component, OnInit, Input } from '@angular/core';
import { Order } from 'src/app/core/interfaces/cart';

@Component({
  selector: 'app-cart-extras-totals',
  templateUrl: './cart-extras-totals.component.html',
  styleUrls: ['./cart-extras-totals.component.css']
})
export class CartExtrasTotalsComponent implements OnInit {

  @Input() order: Order;

  constructor() { }

  ngOnInit() {
    console.log(this.order);
  }

}
