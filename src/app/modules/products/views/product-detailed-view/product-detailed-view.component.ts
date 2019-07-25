import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';
import { ComponentComService } from 'src/app/core/services/component-com.service';
import { ApiService } from 'src/app/core/services/api.service';
import { Price } from 'src/app/core/models/price.model';

@Component({
  selector: 'app-product-detailed-view',
  templateUrl: './product-detailed-view.component.html',
  styleUrls: ['./product-detailed-view.component.css']
})
export class ProductDetailedViewComponent implements OnInit {

  product: Product;

  priceHistory: Array<Price>;

  constructor( private apiService: ApiService,
               private componentComService: ComponentComService ) {
   }

  ngOnInit() {
    this.product = this.componentComService.retrieveData();
    this.apiService.getPriceDataByProduct(24).subscribe(
      data => {
        this.priceHistory = data.map( (entry: Price) => this.apiService.mapToPrice(entry) );
        console.log(this.priceHistory);
      }
    );
  }

}
