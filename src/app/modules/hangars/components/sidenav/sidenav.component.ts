import { Component, OnInit } from '@angular/core';
import { ComponentComService } from 'src/app/core/services/component-com.service';
import { Hangar } from 'src/app/core/models/hangar.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
  // animate* y quitar open/close fcns (alts: CSS)
})
export class SidenavComponent implements OnInit {

  isOpen = false;

  hangar: Hangar = new Hangar();

  constructor( private router: Router,
               private componentComService: ComponentComService ) {
  }

  ngOnInit() {
  }

  public toggle() {
    console.log('Toggled');
    if (this.isOpen) {
      this.closeNav();
    } else {
      this.openNav();
    }
    this.isOpen = !this.isOpen;
  }

  public openNav() {
    document.getElementById('mySidenav').style.width = '250px';
  }

  public closeNav() {
    document.getElementById('mySidenav').style.width = '0';
  }

  public manageElement() {
    this.hangar = this.componentComService.retrieveData();
    this.router.navigate(['/hangars/details', this.hangar.id]);
  }

  public editElement() {
    this.hangar = this.componentComService.retrieveData();
    this.router.navigate(['/hangars/details', this.hangar.id]);
  }

  public removeElement() {
    this.hangar = this.componentComService.retrieveData();
    this.router.navigate(['/hangars/details', this.hangar.id]);
  }

}
