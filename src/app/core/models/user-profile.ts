import { Injectable } from '@angular/core';
import { Adapter } from './adapter';

export class UserProfile {
  constructor(
    public name: string,
    public surname: string,
    public address: string,
    public phoneNumber: number,
  ) {}
}

@Injectable({providedIn: 'root'})
export class UserProfileAdapter implements Adapter<UserProfile> {

  adapt(item: any): UserProfile {
    return new UserProfile(
      item.name,
      item.surname,
      item.address,
      item.phoneNumber
    );
  }
}
