import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hangar } from '../models/hangar';

@Injectable({
  providedIn: 'root'
})
export class HangarApiService {

  private urlApi = 'http://localhost:9006/api/hangar-management/';

  constructor( private http: HttpClient ) { }

  public getHangarById( hangarid: number ): Observable<any> {
    const id = hangarid.toString();
    const urlR = `${this.urlApi}${'hangars/'}${id}`;
    return this.http.get(urlR);
  }

  public getAllHangars(): Observable<any> {
    const urlR = `${this.urlApi}${'hangars'}`;
    return this.http.get(urlR);
  }

  public getHangarPage(page: number, items: number): Observable<any> {
    const p = page.toString();
    const i = items.toString();
    const urlR = `${this.urlApi}${'hangars/'}${p}${'/'}${i}`;
    return this.http.get(urlR);
  }

  public getHangarSearchReults(term: string) {
    const urlR = `${this.urlApi}${'hangars?name='}${term}`;
    return this.http.get(urlR);
  }

  public postHangar( hangar: Hangar ) {
    console.log('Posting hangar');
    console.log(hangar);
    const urlR = `${this.urlApi}${'hangars'}`;
    return this.http.post(urlR, hangar);
  }

  public editHangar( hangar: Hangar ) {
    const id = hangar.id.toString();
    console.log(id);
    const urlR = `${this.urlApi}${'/hangars/'}${id}`;
    return this.http.put(urlR, hangar);
  }

  public removeHangar( hangarid: number ) {
    const id = hangarid.toString();
    const urlR = `${this.urlApi}${'/delete/'}${id}`;
    return this.http.put(urlR, null);
  }

}
