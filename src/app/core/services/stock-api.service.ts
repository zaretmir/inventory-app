import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { StockEntry } from '../models/stock-entry';
import { HangarStockLoaded } from '../state/stock/stock.actions';

@Injectable({
  providedIn: 'root'
})
export class ProductHangarApiService {

  private urlApi = 'http://localhost:9006/api/stock-management';

  constructor( private http: HttpClient ) { }

  public getStockInHangar( hangarid: number ): Observable<any> {
    const id = hangarid.toString();
    const urlR = `${this.urlApi}${'/entries/hangar/'}${hangarid}`;
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
/*
  public addProductToHangar( entry: StockEntry ) {
    const urlR = `${this.urlApi}${'/entries'}`;
    return this.http.put(urlR, entry);
  }
  */

  public updateStock(entry: StockEntry) {
    const urlR = `${this.urlApi}${'/entries'}`;
    return this.http.put(urlR, entry);
  }

}
