import { Component, OnInit } from '@angular/core';
import { ProductApiService } from 'src/app/core/services/product-api.service';
import { ComponentComService } from 'src/app/core/services/component-com.service';
import { Product } from 'src/app/core/models/product.model';
import { Price } from 'src/app/core/models/price.model';

@Component({
  selector: 'app-product-edit-view',
  templateUrl: './product-edit-view.component.html',
  styleUrls: ['./product-edit-view.component.css']
})
export class ProductEditViewComponent implements OnInit {

  product: Product;

  constructor( private productApiService: ProductApiService,
               private componentComService: ComponentComService ) { }

  ngOnInit() {
    this.product = this.componentComService.retrieveData();
    console.log(this.product);
  }

  editProduct( product: Product ) {
    product.id = this.product.id;
    console.log('Producto editado');
    console.log(product);
    this.productApiService.editProduct(product).subscribe(
      ( response: any ) => {
        console.log('Response:');
        console.log(response);
      });
  }

  postPrice( price: Price) {
    return this.productApiService.postPrice(this.product.id, price).subscribe(
      response => {
        console.log(response);
      }
     );
  }




}
