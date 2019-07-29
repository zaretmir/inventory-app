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



  seeMore(product: Product) {
    this.componentComService.collectData(product);
    this.router.navigate(['products/details']);
  }

  selectButtonAction() {
    this.router.navigate(['products/details']);
  }





}
