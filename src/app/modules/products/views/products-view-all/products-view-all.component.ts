import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/core/models/product';
import { ProductApiService } from 'src/app/core/services/product-api.service';
import { CartFacade } from 'src/app/core/state/cart/cart.facade';
import { ProductsFacade } from 'src/app/core/state/products/products.facade';

@Component({
  selector: 'app-products-view-all',
  templateUrl: './products-view-all.component.html',
  styleUrls: ['./products-view-all.component.scss']
})
export class ProductsViewAllComponent implements OnInit {

  // Infinite scroll config params
  items = 5;
  private totalPages: number;
  private currentPage: number;

  isShopping = true;

  products$: Observable<Product[]>;
  error$: Observable<any>;

  constructor(
    private router: Router,
    private productApiService: ProductApiService,
    private productsFacade: ProductsFacade,
    private cartFacade: CartFacade) {

    this.currentPage = 0;
  }

  ngOnInit() {
    this.error$ = this.productsFacade.error$;
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

  onSeeProductDetails(productId: number) {
    console.log('onsee');
    this.router.navigate(['products/details/', productId.toString()]);
  }

  onManage(productId: number) {
    this.router.navigate(['products/manage/', productId.toString()]);
  }

  onEditProduct(productId: number) {
    this.router.navigate(['/products/edit/', productId.toString()]);
  }

  onRemoveProduct(productId: number) { // TODO
    // this.productsFacade.removeProduct();
    console.log(' delete product (parent)');
  }

  addProduct() {
    console.log('add product');
    this.router.navigate(['products/add']);
  }

}
