import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product: Product;
  @Output() selectedProduct: EventEmitter<Product>;

  constructor() {
    this.selectedProduct = new EventEmitter();
  }

  ngOnInit() {
  }

  onClick() {
    console.log('Product card, product:');
    console.log(this.product);
    this.selectedProduct.emit(this.product);
  }

}
