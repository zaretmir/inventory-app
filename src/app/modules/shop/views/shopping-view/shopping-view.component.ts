import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StockEntry } from 'src/app/core/models/stock-entry';
import { StockFacade } from 'src/app/core/state/stock/stock.facade';
import { CartFacade } from 'src/app/core/state/cart/cart.facade';
import { CartProduct } from 'src/app/core/models/cartProduct';
import { Price } from 'src/app/core/models/price';

@Component({
  selector: 'app-shopping-view',
  templateUrl: './shopping-view.component.html',
  styleUrls: ['./shopping-view.component.css']
})
export class ShoppingViewComponent implements OnInit {

  cartProducts$: Observable<StockEntry[]>;

  constructor(
    private stockFacade: StockFacade,
    private cartFacade: CartFacade) { }

  ngOnInit() {
    this.stockFacade.loadHangarStock(74); // Hard-coded AF, temporary
    this.cartProducts$ = this.stockFacade.stockEntries$; // Select by hangar
  }

  onAddToCart(stockEntry: StockEntry) {
    console.log(stockEntry);
    const cartProduct: CartProduct = {
      stockEntry: stockEntry,
      price: this.getLatestPrice(stockEntry).price,
      orderedQuantity: 1,
    };

    this.cartFacade.addCartProductToCart(cartProduct);
  }

  private getLatestPrice(stockEntry: StockEntry): Price {
    const mostRecentDate: number = Math.max(...stockEntry.priceHistory
      .map( priceEntry => priceEntry.dateUpdated) );
    return stockEntry.priceHistory.find(entry => entry.dateUpdated === mostRecentDate);
  }

}
