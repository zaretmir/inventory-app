import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductApiService } from 'src/app/core/services/product-api.service';
import { Product } from 'src/app/core/models/product';
import { StockEntry } from 'src/app/core/models/stock-entry';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product: Product;
  @Output() seeDetails = new EventEmitter();
  @Output() edit = new EventEmitter();
  @Output() addToCart = new EventEmitter<StockEntry>();
  @Output() remove = new EventEmitter<Product>();


  constructor( private productApiService: ProductApiService)  {
  }

  ngOnInit() {
  }

  seeProductDetails() {
    this.seeDetails.emit();
  }

  editProduct() {
    this.edit.emit();
  }

  addProductToCart(stockEntry: StockEntry) {
    this.addToCart.emit(stockEntry);
  }

  removeProduct() {
    this.remove.emit();
  }

}
