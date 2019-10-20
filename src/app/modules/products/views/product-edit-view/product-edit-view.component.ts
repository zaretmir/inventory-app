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
  selector: 'app-product-edit-view',
  templateUrl: './product-edit-view.component.html',
  styleUrls: ['./product-edit-view.component.css']
})
export class ProductEditViewComponent implements OnInit {

  product$: Observable<Product>;
  productStock$: Observable<StockEntry[]>;
  isDataReady = false;

  constructor(
    private productsFacade: ProductsFacade,
    private stockFacade: StockFacade,
    private priceApiService: PriceApiService) {
      this.product$ = this.productsFacade.selectedProduct$;
      this.productStock$ = this.stockFacade.stockEntriesOfProduct$;
    }

  ngOnInit() {
  }

  onSubmit(product: Product) {
    this.productsFacade.updateProduct(product);
  }

  postPrice(price: Price) {
    return this.priceApiService.postPrice(price).subscribe(
      response => {
        console.log(response);
      }
     );
  }




}
