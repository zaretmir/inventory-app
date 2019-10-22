import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartFacade } from 'src/app/core/state/cart/cart.facade';
import { CartProduct } from 'src/app/core/models/cartProduct';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  cartTotals$: Observable<number>;
  cartProducts$: Observable<CartProduct[]>;

  constructor(private facade: CartFacade) {
    this.cartTotals$ = this.facade.totalPrice$;
    this.cartProducts$ = this.facade.cartProducts$;
  }

  ngOnInit() {
  }

  onRemoveProduct(cartProduct: CartProduct) {
    this.facade.removeProductFromCart(cartProduct);
  }

}
