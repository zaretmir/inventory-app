import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductHangar } from '../models/product-hangar.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductHangarApiService {

  private urlApi = 'http://localhost:9006/api/stock';

  constructor( private http: HttpClient ) { }

  public productsInHangar( hangarid: number ): Observable<any> {
    const id = hangarid.toString();
    const urlR = `${this.urlApi}${'/all-products/'}${hangarid}`;
    return this.http.get(urlR);

  }

  public addProductToHangar( entry: ProductHangar ) {
    const id = entry.hangarpk.toString();
    const urlR = `${this.urlApi}${'/add-to-hangar/'}${id}`;
    return this.http.post(urlR, entry);
  }

  /**
   * Model mappings
   */

  public mapToProductHangar(response: any): ProductHangar {

    const productHangar = new ProductHangar();
    productHangar.hangarpk = response.hangarpk;
    productHangar.productpk = response.productpk;
    productHangar.qtyph = response.qtyph;

    return productHangar;
  }

}
