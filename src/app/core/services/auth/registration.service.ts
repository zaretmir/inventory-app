import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private regUrl = 'http://localhost:9006/register';

  constructor( private http: HttpClient ) { }

  public register( user: User ) {
    return this.http.post(this.regUrl, user);
  }






}
