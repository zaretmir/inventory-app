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
  @Output() manage = new EventEmitter();
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

  manageProduct() {
    this.manage.emit();
  }

  editProduct() {
    this.edit.emit();
  }

  removeProduct() {
    this.remove.emit();
  }

}
