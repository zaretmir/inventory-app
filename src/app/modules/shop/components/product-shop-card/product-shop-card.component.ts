import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/core/models/product';
import { StockEntry } from 'src/app/core/models/stock-entry';

@Component({
  selector: 'app-product-shop-card',
  templateUrl: './product-shop-card.component.html',
  styleUrls: ['./product-shop-card.component.css']
})
export class ProductShopCardComponent implements OnInit {

  @Input() stockEntry: StockEntry; // StockEntry with product info??
  @Output() addToCart = new EventEmitter<StockEntry>();

  constructor() { }

  ngOnInit() {
  }

  addProductoCart(stockEntry: StockEntry) {
    console.log('clicked add ot cart');
    this.addToCart.emit(stockEntry);
  }

}
