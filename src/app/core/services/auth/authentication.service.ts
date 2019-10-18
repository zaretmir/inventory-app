import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shareReplay, map } from 'rxjs/operators';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  token: string;

  constructor( private http: HttpClient ) { }

  private authUrl = 'http://localhost:9006/authenticate';

  /*
  authenticate(username, password) {
    return this.http.post<any>(this.authUrl, {username, password}).pipe(
      map(
        userData => {
          console.log(userData);
          sessionStorage.setItem('username', username);
          console.log(jwt_decode(userData.token));
          const tokenStr = 'Bearer ' + userData.token;
          sessionStorage.setItem('token', tokenStr);
          return userData;
        }
      )
    );
  }
  */

 authenticate(username: string, password: string) {
   return this.http.post<any>(this.authUrl, {username, password});
 }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('username');
    return !(user === null);
  }

  logOut() {
    // sessionStorage.removeItem('username');
    // sessionStorage.removeItem('token');
    sessionStorage.clear();
  }

  getUsername(): string {
    return sessionStorage.getItem('username');
  }



}
