import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hangar } from '../models/hangar.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HangarApiService {

  private urlApi = 'http://localhost:9006/api/hangar';

  constructor( private http: HttpClient ) { }

  public getHangarById( hangarid: number ): Observable<any> {
    const id = hangarid.toString();
    const urlR = `${this.urlApi}${'/hangar/'}${id}`;
    return this.http.get(urlR);
  }

  public getAllHangars(): Observable<any> {
    const urlR = `${this.urlApi}${'/hangars-all'}`;
    return this.http.get(urlR);
  }

  public getHangarPage(page: number, items: number): Observable<any> {
    const p = page.toString();
    const i = items.toString();
    const urlR = `${this.urlApi}${'/hangars/'}${p}${'/'}${i}`;
    return this.http.get(urlR);
  }

  public postHangar( hangar: Hangar ) {
    console.log('Posting hangar');
    console.log(hangar);
    const urlR = `${this.urlApi}${'/hangar'}`;
    return this.http.post(urlR, hangar);
  }

  public editHangar( hangar: Hangar ) {
    const id = hangar.id.toString();
    console.log(id);
    const urlR = `${this.urlApi}${'/update/'}${id}`;
    return this.http.put(urlR, hangar);
  }

  public removeHangar( hangarid: number ) {
    const id = hangarid.toString();
    const urlR = `${this.urlApi}${'/delete/'}${id}`;
    return this.http.put(urlR, null);
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
    hangar.isState = response.isState;

    return hangar;
  }
}
