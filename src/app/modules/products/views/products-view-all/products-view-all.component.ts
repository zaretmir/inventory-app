import { Component, OnInit, OnChanges, AfterContentInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentComService } from 'src/app/core/services/component-com.service';
import { ProductApiService } from 'src/app/core/services/product-api.service';
import { Product } from 'src/app/core/models/product';
import { Store, select } from '@ngrx/store';
import { CartState } from 'src/app/core/state/cart/cart.reducer';
import { Observable } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { CartActionTypes } from 'src/app/core/state/cart/cart.actions';
import { ProductsState } from 'src/app/core/state/products/products.reducer';
import { ProductsEffects } from 'src/app/core/state/products/products.effects';
import { ProductsActionTypes, LoadProducts } from 'src/app/core/state/products/products.actions';
import { ProductsFacade } from 'src/app/core/state/products/products.facade';
import { CartFacade } from 'src/app/core/state/cart/cart.facade';
import { Item } from 'src/app/core/models/item';
import { StockEntry } from 'src/app/core/models/stock-entry';
import { CartProduct } from 'src/app/core/models/cartProduct';
import { Price } from 'src/app/core/models/price';
import { tassign } from 'tassign';

@Component({
  selector: 'app-products-view-all',
  templateUrl: './products-view-all.component.html',
  styleUrls: ['./products-view-all.component.css']
})
export class ProductsViewAllComponent implements OnInit {

  // Infinite scroll config params
  items = 5;
  private totalPages: number;
  private currentPage: number;

  isShopping = true;

  products$: Observable<Product[]>;

  constructor(
    private router: Router,
    private productApiService: ProductApiService,
    private productsFacade: ProductsFacade,
    private cartFacade: CartFacade) {

    this.currentPage = 0;
  }

  ngOnInit() {
    if (this.isShopping) {
      this.products$ = this.productsFacade.products$;
    }

    // var hasScrollbar = window.innerWidth > document.documentElement.clientWidth
    this.getAllProducts();
  }
/*
  removeStockEntriesWithPriceNull(product: Product): Product {
    console.log(product);
    product.stockEntries = product.stockEntries.filter(
      stockEntry => stockEntry.priceHistory.length !== 0
    );
    console.log(product);

    return product;
  }*/
/*
  ngAfterContentInit() {


    let hasScrollbar = window.innerWidth > document.documentElement.clientWidth;

    if (!hasScrollbar) {
      console.log('bucle');
      this.getProductsPage(this.currentPage, this.items);
      hasScrollbar = window.innerWidth > document.documentElement.clientWidth;
    }

  }*/

  getAllProducts() {
    this.productsFacade.loadAllProducts();
  }

  getProductsPage(page: number, items: number) {
    this.productsFacade.loadProductsPage(this.currentPage, this.items);
    this.currentPage++;
  }

  /*
  onScroll() {
    console.log('scrolled');
    if (this.currentPage < this.totalPages ) {
      console.log('onscroll');
      this.getProductsPage(this.currentPage++, this.items);
    }
  }*/

  search(name: string) {
    console.log(name);
    this.productApiService.getProductSearchResults(name)
      .subscribe(
        (data) => console.log(data),
        (err) => console.log(err),
        () => console.log('completed')
      );
  }

  // Pasar estas funciones a los componentes de las tarjetas???
  // REPENSAR BIEN ESTO

  onSeeProductDetails(productId: number) {
    console.log('onsee');
    this.productsFacade.setSelectedProductId(productId);
    this.router.navigate(['products/details/', productId.toString()]);
  }

  onEditProduct(productId: number) {
    this.productsFacade.setSelectedProductId(productId);
    this.router.navigate(['/products/edit/', productId.toString()]);
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

  onRemoveProduct(product: Product) {
    this.productsFacade.updateProduct(product);
    console.log(' delete product (parent)');
    // this.componentComService.collectData(product);
    // this.productApiService.removeProduct(product.id.toString()).subscribe();
  }

  selectButtonAction() {
    this.router.navigate(['products/details/66']);
  }

  addProduct(e: MouseEvent) {
    console.log('add product');
    this.router.navigate(['products/add']);
  }

}
