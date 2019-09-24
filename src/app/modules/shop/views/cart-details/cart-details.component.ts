import { Component, OnInit } from '@angular/core';
import { EcommerceService } from 'src/app/core/services/ecommerce.service';
import { Order } from 'src/app/core/interfaces/cart';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  //order: Order;
  order$: Observable<Order>;

  constructor( private shopService: EcommerceService) { }

  ngOnInit() {
    this.getCartData(17);
  }

  getCartData(orderId: number) {
 /*    this.shopService.getOrder(orderId)
      .subscribe(
        (response: Order) => {
          this.order = response;
          console.log(response);
        },
        error => console.log(error),
        () => console.log('Order data ready')
      ); */
    this.order$ = this.shopService.getOrder(17);
  }

}
