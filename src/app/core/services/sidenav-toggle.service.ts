import { Injectable, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidenavToggleService {

  isOpen = false;

  @Output() toggleState: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  toggle() {
    this.isOpen = !this.isOpen;
    this.toggleState.emit(this.isOpen);
  }
}
