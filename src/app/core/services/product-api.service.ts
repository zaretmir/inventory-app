import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';
import { Price } from '../models/price.model';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  private urlApi = 'http://localhost:9006/api';

  constructor( private http: HttpClient ) { }

  public getAllProducts(): Observable<any> {
    const urlR = `${this.urlApi}${'/product/products'}`;
    return this.http.get(urlR);
  }

  public postProduct( product: Product ) {
    const urlR = `${this.urlApi}${'/product/product'}`;
    return this.http.post(urlR, product);
  }

  public editProduct( product: Product ) {
    const id = product.id.toString();
    console.log('Id: ' + id);
    const urlR = `${this.urlApi}${'/product/product/'}${id}`;
    return this.http.put(urlR, product);
  }

  public removeProduct( productid: string ) {
    const urlR = `${this.urlApi}${'/product/delete/'}${productid}`;
    return this.http.put(urlR, null);
  }

  public getPriceDataByProduct( productId: number ): Observable<any> {
    const id = productId.toString();
    const urlR = `${this.urlApi}${'/price/product/'}${id}`;
    return this.http.get(urlR);
  }

  public postPrice( productId: number, price: Price ) {
    const id = productId.toString();
    const urlR = `${this.urlApi}${'/price/product/'}${id}`;
    return this.http.post(urlR, price);
  }

  public mapToProduct(response: any): Product {
    const product = new Product();
    product.id = response.id;
    product.name = response.name;
    product.description = response.description;

    return product;
  }

  public mapToPrice(response: any): Price {
    const price: Price = new Price();
    price.price_id = response.price_id;
    price.product = response.product;
    price.price = response.price;
    price.dateUpdated = response.dateUpdated;

    return price;
  }
}
