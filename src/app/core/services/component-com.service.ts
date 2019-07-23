import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentComService {

  data: any;

  constructor() { }

  collectData( data: any ) {
    this.data = data;
  }

  retrieveData(): any {
    return this.data;
  }
}
