import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product, ProductAdapter } from '../models/product';
import { map } from 'rxjs/operators';

const BASE_URL = 'http://localhost:9006/api/product-management';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  constructor(
    private http: HttpClient,
    private adapter: ProductAdapter) { }

  public getAllProducts(): Observable<any> {
    const urlR = `${BASE_URL}${'/products'}`;
    return this.http.get(urlR).pipe(
      map((response: any) => response.map(item => this.adapter.adapt(item))),
    );
  }

  public getProductPage(page: number, items: number): Observable<any> {
    console.log('page request');
    const urlR = `${BASE_URL}/products/${page.toString()}/${items.toString()}`;
    return this.http.get<Product[]>(urlR);
  }

  public getProductById(id: string): Observable<any> {
    const urlR = `${BASE_URL}/products/${id}`;
    return this.http.get(urlR).pipe(
      map((response: any) => this.adapter.adapt(response))
    );
  }

  public getProductSearchResults(name: string): Observable<any> {
    const urlR = `${BASE_URL}/products?name=${name}`;
    return this.http.get(urlR).pipe(
      map((response: any) => response.map(item => this.adapter.adapt(item))),
    );
  }

  public postProduct( product: Product ) {
    const urlR = `${BASE_URL}/products`;
    return this.http.post(urlR, product).pipe(
      map((response: any) => this.adapter.adapt(response))
    );
  }

  public editProduct( product: Product ) {
    const id = product.id.toString();
    console.log('Id: ' + id);
    const urlR = `${BASE_URL}/products`;
    return this.http.put(urlR, product).pipe(
      map((response: any) => this.adapter.adapt(response))
    );
  }

  public removeProduct( productId: string ) {
    const urlR = `${BASE_URL}/products/delete/${productId}`;
    return this.http.put(urlR, null).pipe(
      map((response: any) => this.adapter.adapt(response))
    );
  }

}
