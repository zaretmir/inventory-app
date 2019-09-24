import { Component, OnInit } from '@angular/core';
import { ComponentComService } from 'src/app/core/services/component-com.service';
import { Router, ActivatedRoute } from '@angular/router';

import { trigger, state, style, animate, transition } from '@angular/animations';
import { HangarApiService } from 'src/app/core/services/hangar-api.service';
import { Hangar } from 'src/app/core/interfaces/hangar';

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

  hangar: Hangar;

  constructor( private router: Router,
               private componentComService: ComponentComService,
               private hangarApiService: HangarApiService,
               private route: ActivatedRoute ) {
  }

  ngOnInit() {
  }

  toggle() {
    this.isOpen = !this.isOpen;
    console.log('Toggled');
  }

  public manageElement() {
    this.hangar = this.componentComService.retrieveData();
    this.router.navigate(['/hangars/manage', this.hangar.id.toString()]);
  }

  public editElement() {
    this.hangar = this.componentComService.retrieveData();
    this.router.navigate(['hangars/edit', this.hangar.id.toString()]);
  }

  public removeElement() {
    this.hangar = this.componentComService.retrieveData();
    this.hangarApiService.removeHangar( this.hangar.id )
      .subscribe( () => this.componentComService.retrieveData());
  }

}
