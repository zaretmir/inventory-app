import { Component, OnInit } from '@angular/core';
import { ComponentComService } from 'src/app/core/services/component-com.service';
import { ProductApiService } from 'src/app/core/services/product-api.service';
import { ActivatedRoute } from '@angular/router';
import { PriceApiService } from 'src/app/core/services/price-api.service';
import { flatMap, switchMap } from 'rxjs/operators';
import { StockEntry } from 'src/app/core/interfaces/stock-entry';
import { ProductHangarApiService } from 'src/app/core/services/product-hangar-api.service';
import { Product } from 'src/app/core/interfaces/product';
import { Price } from 'src/app/core/interfaces/price';

@Component({
  selector: 'app-product-detailed-view',
  templateUrl: './product-detailed-view.component.html',
  styleUrls: ['./product-detailed-view.component.css']
})
export class ProductDetailedViewComponent implements OnInit {

  product: Product;
  id: string;
  stockEntries: StockEntry[];
  isDataReady = false;

  constructor( private productApiService: ProductApiService,
               private priceApiService: PriceApiService,
               private stockService: ProductHangarApiService,
               private componentComService: ComponentComService,
               private route: ActivatedRoute ) {
   }

  ngOnInit() {

    this.route.params.subscribe( (params) => this.id = params.productid );

    this.getProduct(this.id);
    this.getStock(this.id);
    this.getProductSM(this.id);
  }

  getProduct(productId: string) {
    this.productApiService.getProductById(productId).subscribe(
      response => {
        this.product = response;
        this.isDataReady = true;
      },
      (error: Response) => {
        if (error.status === 404) {
          alert('Product not found');
        } else {
          alert('Product unexpected error');
        }
      },
      () => console.log('product info retrieved')
    );
  }

  getProductSM(productId: string): void {
    this.productApiService
    .getProductById(productId).pipe(
      switchMap(
        (product: Product) => {
          this.product = product;
          return this.priceApiService.getPriceDataByProduct(product.id);
      }))
      .subscribe(
        response => console.log('Res sm: ' + response),
        error => console.log('error sm'),
        () => console.log('complete')
      );
  }

  public getStock(productId: string): void {
    this.stockService.getStockByProduct(productId).subscribe(
      response => {
        this.stockEntries = response;
      },
      (error: Response) => {
        if (error.status === 404) {
          alert ('No stock found');
        } else {
          alert('Stock unexpected error');
        }
      }
    );
  }


}
