import { Component, OnInit } from '@angular/core';
import { ComponentComService } from 'src/app/core/services/component-com.service';
import { Hangar } from 'src/app/core/models/hangar.model';
import { Router } from '@angular/router';

import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  animations: [

    trigger('openClose', [
      state('open', style({
        width: '250px'
      })),
      state('closed', style({
        width: '0px'
      }))
    ])
  ]
})
export class SidenavComponent implements OnInit {

  isOpen = false;

  hangar: Hangar = new Hangar();

  constructor( private router: Router,
               private componentComService: ComponentComService ) {
  }

  ngOnInit() {
  }

  toggle() {
    this.isOpen = !this.isOpen;
    console.log('Toggled');
  }

  public manageElement() {
    this.hangar = this.componentComService.retrieveData();
    this.router.navigate(['/hangars/details', this.hangar.id]);
  }

  public editElement() {
    this.hangar = this.componentComService.retrieveData();
    this.router.navigate(['hangars/edit', this.hangar.id]);
  }

  public removeElement() {
    this.hangar = this.componentComService.retrieveData();
    this.router.navigate(['/hangars/details', this.hangar.id]);
  }

}
