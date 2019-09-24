import { Component, OnInit, OnChanges } from '@angular/core';
import { ProductApiService } from 'src/app/core/services/product-api.service';
import { ComponentComService } from 'src/app/core/services/component-com.service';
import { ActivatedRoute } from '@angular/router';
import { PriceApiService } from 'src/app/core/services/price-api.service';
import { Product } from 'src/app/core/interfaces/product';
import { Price } from 'src/app/core/interfaces/price';

@Component({
  selector: 'app-product-edit-view',
  templateUrl: './product-edit-view.component.html',
  styleUrls: ['./product-edit-view.component.css']
})
export class ProductEditViewComponent implements OnInit {

  product: Product;
  resp: Product;
  id: string;
  isDataReady = false;

  constructor( private productApiService: ProductApiService,
               private priceApiService: PriceApiService,
               private componentComService: ComponentComService,
               private route: ActivatedRoute ) { }

  ngOnInit() {

    this.route.params.subscribe( (params) => this.id = params.productid );

    this.productApiService.getProductById(this.id).subscribe(
      (response: any) => {
        this.product = response;
        this.isDataReady = true;
      }
    );

  }

  postPrice( price: Price) {
    return this.priceApiService.postPrice(this.product.id, price).subscribe(
      response => {
        console.log(response);
      }
     );
  }




}
