import { Component, OnInit, Input } from '@angular/core';
import { Order } from 'src/app/core/interfaces/cart';
import { ProductApiService } from 'src/app/core/services/product-api.service';

@Component({
  selector: 'app-cart-items-list',
  templateUrl: './cart-items-list.component.html',
  styleUrls: ['./cart-items-list.component.css']
})
export class CartItemsListComponent implements OnInit {

  @Input() order: Order;

  constructor(private productService: ProductApiService) { }

  ngOnInit() {
    this.order.items
      .map(
        item => {
          // Get product description
          //this.productService.getProductById(item.itemOrigin.productPk.toString())

        }
      );
  }

  getItemDetails() {

  }

}
