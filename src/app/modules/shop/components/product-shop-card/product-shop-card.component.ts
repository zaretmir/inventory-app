import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/core/models/product';
import { StockEntry } from 'src/app/core/models/stock-entry';
import { Icon } from 'src/app/shared/buttons/round-icon-button/round-icon-button.component';

@Component({
  selector: 'app-product-shop-card',
  templateUrl: './product-shop-card.component.html',
  styleUrls: ['./product-shop-card.component.scss']
})
export class ProductShopCardComponent implements OnInit {

  @Input() stockEntry: StockEntry; // StockEntry with product info??
  @Output() addToCart = new EventEmitter<StockEntry>();

  iconTypes = Icon;

  constructor() { }

  ngOnInit() {
  }

  addProductoCart() {
    console.log('clicked add ot cart');
    this.addToCart.emit(this.stockEntry);
  }

}
