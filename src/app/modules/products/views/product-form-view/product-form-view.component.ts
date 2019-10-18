import { Component, OnInit } from '@angular/core';
import { ProductsFacade } from 'src/app/core/state/products/products.facade';
import { Product } from 'src/app/core/models/product';

@Component({
  selector: 'app-product-form-view',
  templateUrl: './product-form-view.component.html',
  styleUrls: ['./product-form-view.component.css']
})
export class ProductFormViewComponent {

  constructor(private productsFacade: ProductsFacade) { }

  onSumbit(product: Product) {
    this.productsFacade.addProduct(product);
  }


}
