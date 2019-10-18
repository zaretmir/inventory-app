import { Component, OnInit, Input } from '@angular/core';
import { Order } from 'src/app/core/models/cart';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart-extras-totals',
  templateUrl: './cart-extras-totals.component.html',
  styleUrls: ['./cart-extras-totals.component.css']
})
export class CartExtrasTotalsComponent implements OnInit {

  @Input() cartTotal$: Observable<number>;

  constructor() { }

  ngOnInit() {
  }

}
