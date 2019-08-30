import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Price } from '../models/price.model';

@Injectable({
  providedIn: 'root'
})
export class PriceApiService {

  private urlApi = 'http://localhost:9006/api/price-management';

  constructor( private http: HttpClient ) { }

  public getPriceDataByProduct( productId: number ): Observable<any> {
    const id = productId.toString();
    const urlR = `${this.urlApi}${'/entries/products/'}${id}`;
    return this.http.get(urlR);
  }

  public postPrice( productId: number, price: Price ) {
    const id = productId.toString();
    const urlR = `${this.urlApi}${'/entries/products/'}${id}`;
    return this.http.post(urlR, price);
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
