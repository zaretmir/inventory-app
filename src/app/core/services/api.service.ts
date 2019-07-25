import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hangar } from '../models/hangar.model';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { Price } from '../models/price.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlApi = 'http://localhost:9006/api';

  constructor( private http: HttpClient ) { }

  public getHangarById(): Observable<any> {
    const urlR = `${this.urlApi}${'/hangar/hangar/1'}`;
    return this.http.get(urlR);
  }

  public getAllHangars(): Observable<any> {
    const urlR = `${this.urlApi}${'/hangar/hangars'}`;
    return this.http.get(urlR);
  }



  public postHangar( hangar: Hangar ) {
    console.log('Posting hangar');
    const urlR = `${this.urlApi}${'/hangar/hangar'}`;
    return this.http.post(urlR, hangar);
  }

  public getAllProducts(): Observable<any> {
    const urlR = `${this.urlApi}${'/product/products'}`;
    return this.http.get(urlR);
  }

  public getPriceDataByProduct(productId: number): Observable<any> {
    const id = productId.toString();
    const urlR = `${this.urlApi}${'/price/product/'}${id}`;
    return this.http.get(urlR);
  }

  /**
   * Model mappings
   */

  public mapToHangar(response: any): Hangar {
    const hangar = new Hangar();
    hangar.id = response.id;
    hangar.name = response.name;
    hangar.address = response.address;

    return hangar;
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
