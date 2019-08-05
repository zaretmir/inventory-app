import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';
import { Router } from '@angular/router';
import { ComponentComService } from 'src/app/core/services/component-com.service';
import { ProductApiService } from 'src/app/core/services/product-api.service';

@Component({
  selector: 'app-products-view-all',
  templateUrl: './products-view-all.component.html',
  styleUrls: ['./products-view-all.component.css']
})
export class ProductsViewAllComponent implements OnInit {

  products: Array<Product> = [];

  constructor( private router: Router,
               private productApiService: ProductApiService,
               private componentComService: ComponentComService ) { }

  ngOnInit() {

    this.productApiService.getAllProducts().subscribe(
      data => {
        this.products = data.map( (item: Product) => this.productApiService.mapToProduct(item) );
        console.log(this.products);
      }
    );
  }

  // Pasar estas funciones a los componentes de las tarjetas???
  // REPENSAR BIEN ESTO

  seeMore(product: Product) {
    this.componentComService.collectData(product);
    this.router.navigate(['products/details']);
  }

  editProduct(product: Product) {
    console.log(' edit product (parent)');
    this.componentComService.collectData(product);
    this.router.navigate(['/products/edit/', product.id.toString()]);
  }

  removeProduct(product: Product) {
    console.log(' delete product (parent)');
    //this.componentComService.collectData(product);
    //this.productApiService.removeProduct(product.id.toString()).subscribe();
  }

  selectButtonAction() {
    this.router.navigate(['products/details/66']);
  }

  addProduct(e: MouseEvent) {
    console.log('add product');
    this.router.navigate(['products/add']);
  }





}
