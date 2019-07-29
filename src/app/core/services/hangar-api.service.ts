import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hangar } from '../models/hangar.model';
import { Observable } from 'rxjs';
import { ProductHangar } from '../models/product-hangar.model';

@Injectable({
  providedIn: 'root'
})
export class HangarApiService {

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

  public editHangar( hangar: Hangar ) {
    const id = hangar.id.toString();
    const urlR = `${this.urlApi}${'/update/'}${id}`;
    return this.http.put(urlR, hangar);
  }

  public productsByHangar( hangarid: number ): Observable<any> {
    const id = hangarid.toString();
    const urlR = `${this.urlApi}${'/product/productsInHangar/'}${id}`;
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
    hangar.owner = response.owner;
    hangar.ownerEmail = response.ownerEmail;
    hangar.phoneNumber = response.phoneNumber;

    return hangar;
  }

  public mapToProductHangar(response: any): ProductHangar {

    const productHangar = new ProductHangar();
    productHangar.hangarpk = response.hangarpk;
    productHangar.productpk = response.productpk;
    productHangar.qtyph = response.qtyph;

    return productHangar;
  }


}
