import { Component, OnDestroy, Output, EventEmitter } from '@angular/core';
import { ComponentComService } from 'src/app/core/services/component-com.service';
import { Router, ActivatedRoute } from '@angular/router';

import { trigger, state, style, animate, transition } from '@angular/animations';
import { HangarApiService } from 'src/app/core/services/hangar-api.service';
import { HangarsFacade } from 'src/app/core/state/hangars/hangars.facade';
import { Observable, Subscription } from 'rxjs';

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
export class SidenavComponent implements OnDestroy {

  isOpen = false;

  hangarId$: Observable<number>;
  hangarId: number;

  @Output() manage = new EventEmitter<MouseEvent>();
  @Output() edit = new EventEmitter<MouseEvent>();
  @Output() remove = new EventEmitter<MouseEvent>();

  constructor(
    private hangarsFacade: HangarsFacade,
    private router: Router,
    private componentComService: ComponentComService,
    private hangarApiService: HangarApiService
    ) {
  }

  ngOnDestroy() {
    // unsubscribe?
  }

  toggle() {
    this.isOpen = !this.isOpen;
    console.log('Toggled');
  }

  public manageElement() {
    this.manage.emit();
    // this.router.navigate(['/hangars/manage', this.hangarId.toString()]);
  }

  public editElement() {
    this.edit.emit();
    // this.router.navigate(['hangars/edit', this.hangarId.toString()]);
  }

  public removeElement() {
    this.remove.emit();
    // this.hangarApiService.removeHangar( this.hangarId )
      // .subscribe( () => this.componentComService.retrieveData());
  }

}
