import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shareReplay, map } from 'rxjs/operators';


export class JwtResponse {
  constructor(
    public jwttoken: string,
     ) {}
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  constructor( private http: HttpClient ) { }

  private authUrl = 'http://localhost:9007/authenticate';

  authenticate(username, password) {
    return this.http.post<any>(this.authUrl, {username, password}).pipe(
      map(
        userData => {
          sessionStorage.setItem('username', username);
          const tokenStr = 'Bearer ' + userData.token;
          console.log(tokenStr);
          sessionStorage.setItem('token', tokenStr);
          return userData;
        }
      )
    );
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('username');
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem('username');
  }


}
