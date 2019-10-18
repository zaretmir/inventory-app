import { Component, OnInit } from '@angular/core';
import { ProductApiService } from 'src/app/core/services/product-api.service';
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
  id: string;
  isDataReady = false;

  constructor(
    private productsFacade: ProductsFacade,
    private stockFacade: StockFacade,
    private priceApiService: PriceApiService,
    private route: ActivatedRoute ) {
      this.product$ = this.productsFacade.selectedProduct$;
      this.productStock$ = this.stockFacade.stockEntriesOfProduct$;
    }

  ngOnInit() {
    this.route.params.subscribe( (params) => this.id = params.productid );
    this.stockFacade.setSelectedProduct(+this.id); // TODO: Cambiar esto
  }

  onSubmit(product: Product) {
    product.id = +this.id;
    product.active = true;
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
