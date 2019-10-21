import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserProfileAdapter, UserProfile } from '../../models/user-profile';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class UserManagementService {

  private urlApi = 'http://localhost:9006/api/user-management/';

  constructor(
    private http: HttpClient,
    private adapter: UserProfileAdapter) {}

  public getLoggedUserProfile() {
    const urlR = `${this.urlApi}users`;
    return this.http.get<UserProfile>(urlR).pipe(
      map(data => {
        console.log(data);
        return this.adapter.adapt(data);
      })
    );
  }

  public editLoggedUserProfile(profile: UserProfile) {
    const urlR = `${this.urlApi}users`;
    return this.http.put<UserProfile>(urlR, profile).pipe(
      map(data => this.adapter.adapt(data))
    );
  }

}
