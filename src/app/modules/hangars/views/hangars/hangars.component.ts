import { Component, OnInit, SystemJsNgModuleLoader, Input } from '@angular/core';
import { Hangar } from 'src/app/core/models/hangar.model';
import { ApiService } from 'src/app/core/services/api.service';
import { Router } from '@angular/router';
import { ComponentComService } from 'src/app/core/services/component-com.service';
import { SideNavComponent } from 'src/app/layouts/side-nav/side-nav.component';
import { SidenavToggleService } from 'src/app/core/services/sidenav-toggle.service';

@Component({
  selector: 'app-hangars',
  templateUrl: './hangars.component.html',
  styleUrls: ['./hangars.component.css']
})
export class HangarsComponent implements OnInit {


  hangar: Hangar = new Hangar();

  hangars: Hangar[] = new Array<Hangar>();

  isHangarSelected: boolean;
  hangarSelected: Hangar = new Hangar();

  constructor( private router: Router,
               private apiService: ApiService,
               private componentComService: ComponentComService) { }

  ngOnInit() {

    this.isHangarSelected = false;

    this.apiService.getAllHangars().subscribe(
      data => {
        this.hangars = data.map( item => this.apiService.mapResult(item));
        console.log(this.hangars);
      }
    );

    this.apiService.getHangarById().subscribe(
      data => {
        if (data === undefined ) {
          alert('No se ha encontrado el hangar'); // ¿nunca entra aquí?
        } else {
          this.hangar = this.apiService.mapResult(data);
        }
      });
  }

  public showOptionsMenu() {
    console.log('Menú de opciones para el hangar: ' + this.hangarSelected.name);
    document.getElementById('mySidenav').style.width = '250px';
  }

  /***
   * Navigate to hangar form:
   *  _Shows hangar info (edit=false) if hangar has been previously selected.
   *  _Else shows empty form to submit new hangar.
   */
  public hangarForm( hangar: Hangar ) {
    this.componentComService.collectData(hangar);
    this.router.navigate(['/hangars/details', hangar.id]);
  }

  public addNewHangar() {
    console.log('Navigating to new hangar form');
    this.router.navigate(['hangars/new']);
  }

  public setHangarSelected( hangar: Hangar) {
    console.log('Hangar clicado: ' + hangar.name);
    this.componentComService.collectData(hangar);
    this.isHangarSelected = true;
    this.hangarSelected = hangar;
  }

  public selectButtonAction() {
    if (this.isHangarSelected) {

    } else {
      this.addNewHangar();
    }
  }


}
