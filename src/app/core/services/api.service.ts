import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hangar } from '../models/hangar.model';
import { Observable } from 'rxjs';

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

  public mapResult(response: any): Hangar {
    const hangar = new Hangar();

    hangar.name = response.name;
    hangar.address = response.address;

    return hangar;
  }
}
