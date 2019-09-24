import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private baseUrl = 'http://localhost:9006/';

  constructor( private http: HttpClient ) { }

  public register( user: User ) {
    const urlR = `${this.baseUrl}${'register'}`;

    return this.http.post(urlR, user);
  }

  public isUser( username: string ) {
    const urlR = `${this.baseUrl}${'validate'}`;
    const params = new HttpParams().set('username', username);
    return this.http.get(urlR, {params});
  }






}
