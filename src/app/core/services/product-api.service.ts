import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';
import { Price } from '../models/price.model';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  private urlApi = 'http://localhost:9006/api/product-management';

  constructor( private http: HttpClient ) { }

  public getAllProducts(): Observable<any> {
    const urlR = `${this.urlApi}${'/products'}`;
    return this.http.get(urlR);
  }

  public getProductPage(page: number, items: number): Observable<any> {
    const p = page.toString();
    const i = items.toString();
    const urlR = `${this.urlApi}${'/products/'}${p}${'/'}${i}`;
    return this.http.get(urlR);
  }

  public getProductById(productid: number): Observable<any> {
    const id = productid.toString();
    const urlR = `${this.urlApi}${'/products/'}${id}`;
    return this.http.get(urlR);
  }

  public postProduct( product: Product ) {
    const urlR = `${this.urlApi}${'/products/'}`;
    return this.http.post(urlR, product);
  }

  public editProduct( product: Product ) {
    const id = product.id.toString();
    console.log('Id: ' + id);
    const urlR = `${this.urlApi}${'/products/'}${id}`;
    return this.http.put(urlR, product);
  }

  public removeProduct( productId: string ) {
    const urlR = `${this.urlApi}${'/products/delete/'}${productId}`;
    return this.http.put(urlR, null);
  }



  public mapToProduct(response: any): Product {
    const product = new Product();
    product.id = response.id;
    product.name = response.name;
    product.description = response.description;
    product.isState = response.isState;

    return product;
  }

}
