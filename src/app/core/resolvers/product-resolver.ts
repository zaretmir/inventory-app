import { Injectable } from '@angular/core';
import { ProductApiService } from 'src/app/core/services/product-api.service';

import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Product } from '../interfaces/product';

@Injectable()
export class ProductResolver implements Resolve<any> {

  constructor( private productApiService: ProductApiService ) {  }

  resolve(route: ActivatedRouteSnapshot) {
    return this.getProduct(route.params.productid);

  }

  getProduct(productid: string) {
    let product: Product;

    this.productApiService.getProductById(productid).subscribe(
      response => {
        product = response;
        console.log('Resolver:');
        console.log(product);
      }
    );

    return product;
  }

}
