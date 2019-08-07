import { Component, OnInit, OnChanges } from '@angular/core';
import { ProductApiService } from 'src/app/core/services/product-api.service';
import { ComponentComService } from 'src/app/core/services/component-com.service';
import { Product } from 'src/app/core/models/product.model';
import { Price } from 'src/app/core/models/price.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-edit-view',
  templateUrl: './product-edit-view.component.html',
  styleUrls: ['./product-edit-view.component.css']
})
export class ProductEditViewComponent implements OnInit {

  product: Product;
  resp: Product;
  id: string;
  isDataReady = false;

  constructor( private productApiService: ProductApiService,
               private componentComService: ComponentComService,
               private route: ActivatedRoute ) { }

  ngOnInit() {

    this.route.params.subscribe( (params) => this.id = params.productid );

    this.productApiService.getProductById(+this.id).subscribe(
      (response: any) => {
        this.product = this.productApiService.mapToProduct(response);
        console.log(this.product);
        this.isDataReady = true;
      }
    );




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
