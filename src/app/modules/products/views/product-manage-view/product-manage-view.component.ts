import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PriceApiService } from 'src/app/core/services/price-api.service';
import { Product } from 'src/app/core/models/product';
import { Price } from 'src/app/core/models/price';
import { ProductsFacade } from 'src/app/core/state/products/products.facade';
import { Observable } from 'rxjs';
import { StockEntry } from 'src/app/core/models/stock-entry';
import { StockFacade } from 'src/app/core/state/stock/stock.facade';

@Component({
  selector: 'app-product-manage-view',
  templateUrl: './product-manage-view.component.html',
  styleUrls: ['./product-manage-view.component.css']
})
export class ProductManageViewComponent implements OnInit {

  product$: Observable<Product>;
  productStock$: Observable<StockEntry[]>;
  error$: Observable<any>;
  isDataReady = false;

  constructor(
    private productsFacade: ProductsFacade,
    private stockFacade: StockFacade,
    private priceApiService: PriceApiService) {
      this.error$ = this.productsFacade.error$;
      this.product$ = this.productsFacade.selectedProduct$;
      this.productStock$ = this.stockFacade.stockEntriesOfProduct$;
    }

  ngOnInit() {
  }

  postPrice(price: Price) {
    return this.priceApiService.postPrice(price).subscribe(
      response => {
        console.log(response);
      }
     );
  }

}
