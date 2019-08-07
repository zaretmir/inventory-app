import { Component, OnInit, OnChanges, AfterContentInit } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';
import { Router } from '@angular/router';
import { ComponentComService } from 'src/app/core/services/component-com.service';
import { ProductApiService } from 'src/app/core/services/product-api.service';

@Component({
  selector: 'app-products-view-all',
  templateUrl: './products-view-all.component.html',
  styleUrls: ['./products-view-all.component.css']
})
export class ProductsViewAllComponent implements OnInit, AfterContentInit {

  // Infinite scroll config params
  items = 3;
  private totalPages: number;
  private currentPage: number;

  products: Array<Product> = [];

  constructor( private router: Router,
               private productApiService: ProductApiService,
               private componentComService: ComponentComService ) {

    this.currentPage = 0;

                }

  ngOnInit() {

    // var hasScrollbar = window.innerWidth > document.documentElement.clientWidth

    this.getProducts(this.currentPage, this.items);

  }

  ngAfterContentInit() {

    let hasScrollbar = window.innerWidth < document.documentElement.clientWidth;

    if (!hasScrollbar) {
      console.log('bucle');
      this.getProducts(this.currentPage, this.items);
      hasScrollbar = window.innerWidth < document.documentElement.clientWidth;
    }

  }

  getProducts(page: number, items: number) {

    this.productApiService.getProductPage(page, items).subscribe(
      response => {
        response.content.map( item => {
          this.products.push(this.productApiService.mapToProduct(item));
        });
        this.totalPages = response.totalPages;
      });
    this.currentPage++;
  }

  onScroll() {
    if (this.currentPage < this.totalPages ) {
      console.log('onscroll');
      this.getProducts(this.currentPage++, this.items);
    }
  }



  // Pasar estas funciones a los componentes de las tarjetas???
  // REPENSAR BIEN ESTO

  seeMore(product: Product) {
    this.componentComService.collectData(product);
    this.router.navigate(['products/details/', product.id.toString()]);
  }

  editProduct(product: Product) {
    console.log(' edit product (parent)');
    this.componentComService.collectData(product);
    this.router.navigate(['/products/edit/', product.id.toString()]);
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
