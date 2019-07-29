import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';
import { ComponentComService } from 'src/app/core/services/component-com.service';
import { Price } from 'src/app/core/models/price.model';
import { ProductApiService } from 'src/app/core/services/product-api.service';

@Component({
  selector: 'app-product-detailed-view',
  templateUrl: './product-detailed-view.component.html',
  styleUrls: ['./product-detailed-view.component.css']
})
export class ProductDetailedViewComponent implements OnInit {

  product: Product;

  priceHistory: Array<Price>;

  constructor( private productApiService: ProductApiService,
               private componentComService: ComponentComService ) {
   }

  ngOnInit() {
    this.product = this.componentComService.retrieveData();
    this.productApiService.getPriceDataByProduct(this.product.id).subscribe(
      data => {
        this.priceHistory = data.map( (entry: Price) => this.productApiService.mapToPrice(entry) );
        console.log(this.priceHistory);
      }
    );
  }

  postPrice( price: Price) {
    return this.productApiService.postPrice(this.product.id, price).subscribe(
      response => {
        console.log(response);
      }
     );
  }

}
