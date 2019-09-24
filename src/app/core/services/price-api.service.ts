import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Price } from '../interfaces/price';

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
}
