import { Component, OnInit } from '@angular/core';
import { PriceApiService } from 'src/app/core/services/price-api.service';
import { StockEntry } from 'src/app/core/models/stock-entry';
import { Product } from 'src/app/core/models/product';
import { Price } from 'src/app/core/models/price';
import { ProductsFacade } from 'src/app/core/state/products/products.facade';
import { Observable } from 'rxjs';
import { StockFacade } from 'src/app/core/state/stock/stock.facade';

@Component({
  selector: 'app-product-detailed-view',
  templateUrl: './product-detailed-view.component.html',
  styleUrls: ['./product-detailed-view.component.css']
})
export class ProductDetailedViewComponent implements OnInit {

  product$: Observable<Product>;
  productStock$: Observable<StockEntry[]>;

  constructor(
    private productsFacade: ProductsFacade,
    private stockFacade: StockFacade,
    private priceApiService: PriceApiService,
    ) {
      this.product$ = this.productsFacade.selectedProduct$;
      this.productStock$ = this.stockFacade.stockEntriesOfProduct$;
   }

  ngOnInit() {
    //this.stockFacade.loadProductStock(+this.id);

    //this.getStock(this.id);
    //this.getProductSM(this.id);
  }

}
