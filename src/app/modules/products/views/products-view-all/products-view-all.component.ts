import { Component, OnInit, OnChanges, AfterContentInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentComService } from 'src/app/core/services/component-com.service';
import { ProductApiService } from 'src/app/core/services/product-api.service';
import { Product } from 'src/app/core/interfaces/product';
import { Store, select } from '@ngrx/store';
import { CartState } from 'src/app/core/state/cart/cart.reducer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CartActionTypes } from 'src/app/core/state/cart/cart.actions';
import { ProductsState } from 'src/app/core/state/products/products.reducer';
import { ProductsEffects } from 'src/app/core/state/products/products.effects';
import { ProductsActionTypes, LoadProducts } from 'src/app/core/state/products/products.actions';
import { ProductsFacade } from 'src/app/core/state/products/products.facade';
import { CartFacade } from 'src/app/core/state/cart/cart.facade';

@Component({
  selector: 'app-products-view-all',
  templateUrl: './products-view-all.component.html',
  styleUrls: ['./products-view-all.component.css']
})
export class ProductsViewAllComponent implements OnInit, AfterContentInit {

  // Infinite scroll config params
  items = 5;
  private totalPages: number;
  private currentPage: number;

  products$: Observable<Product[]>;

  constructor(
    private router: Router,
    private productApiService: ProductApiService,
    private productsFacade: ProductsFacade,
    private cartFacade: CartFacade) {

    this.currentPage = 0;
  }

  ngOnInit() {
    this.products$ = this.productsFacade.products$;
    // var hasScrollbar = window.innerWidth > document.documentElement.clientWidth
    this.getProductsPage(this.currentPage, this.items);
  }

  ngAfterContentInit() {

    let hasScrollbar = window.innerWidth > document.documentElement.clientWidth;

    if (!hasScrollbar) {
      console.log('bucle');
      this.getProductsPage(this.currentPage, this.items);
      hasScrollbar = window.innerWidth > document.documentElement.clientWidth;
    }
  }

  getAllProducts() {
    this.productsFacade.loadAllProducts();
  }

  getProductsPage(page: number, items: number) {
    this.productsFacade.loadProductsPage(this.currentPage, this.items);
    this.currentPage++;
  }

  /*
  getProducts(page: number, items: number) {

    this.productApiService.getProductPage(page, items).subscribe(
      response => {
        response.content.map( item => {
          this.products.push(item);
        });
        this.totalPages = response.totalPages;
      });
    this.currentPage++;
  }*/

  onScroll() {
    console.log('scrolled');
    if (this.currentPage < this.totalPages ) {
      console.log('onscroll');
      this.getProductsPage(this.currentPage++, this.items);
    }
  }

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

  seeProductDetails(productId: number) {
    this.productsFacade.setSelectedProductId(productId);
    this.router.navigate(['products/details/', productId.toString()]);
  }

  editProduct(productId: number) {
    this.productsFacade.setSelectedProductId(productId);
    this.router.navigate(['/products/edit/', productId.toString()]);
  }

  addToCart(product: Product) {
    this.cartFacade.updateItemCount();
  }

  removeProduct(product: Product) {
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
