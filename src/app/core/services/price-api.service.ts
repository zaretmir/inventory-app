import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Price } from '../models/price';

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

  public postPrice(price: Price) {
    console.log('Api');
    console.log(price);
    const urlR = `${this.urlApi}/entries`;
    return this.http.post(urlR, price);
  }
}
