import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { StockEntry } from '../interfaces/stock-entry';

@Injectable({
  providedIn: 'root'
})
export class ProductHangarApiService {

  private urlApi = 'http://localhost:9006/api/stock-management';

  constructor( private http: HttpClient ) { }

  public getProductsInHangar( hangarid: number ): Observable<any> {
    const id = hangarid.toString();
    const urlR = `${this.urlApi}${'/entries/hangars/'}${hangarid}`;
    return this.http.get(urlR);
  }

  public getStockByProduct( productid: string ): Observable<any> {
    console.log('en servicio');
    const urlR = `${this.urlApi}${'/entries/product/'}${productid}`;
    return this.http.get(urlR);
  }

  public getProductsInHangarExcerpt( hangarid: number ): Observable<any> {
    const id = hangarid.toString();
    const urlR = `${this.urlApi}${'/entries/hangar/'}${hangarid}${'?details=true'}`;
    return this.http.get(urlR);

  }

  public addProductToHangar( entry: StockEntry ) {
    const id = entry.hangarPk.toString();
    const urlR = `${this.urlApi}${'/entries'}`;
    return this.http.put(urlR, entry);
  }

}
