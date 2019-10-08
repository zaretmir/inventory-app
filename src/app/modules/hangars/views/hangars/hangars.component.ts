import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentComService } from 'src/app/core/services/component-com.service';
import { Hangar } from 'src/app/core/interfaces/hangar';
import { HangarsFacade } from 'src/app/core/state/hangars/hangars.facade';
import { Observable } from 'rxjs';
import { HangarPage } from 'src/app/core/interfaces/hangarPage';

@Component({
  selector: 'app-hangars',
  templateUrl: './hangars.component.html',
  styleUrls: ['./hangars.component.css']
})
export class HangarsComponent implements OnInit {

  // Pagination
  currentPage = 0;
  items = 5;
  total: number;

  hangarsPage$: Observable<HangarPage>;

  isHangarSelected: boolean;
  hangarSelected: Hangar;

  constructor( private router: Router,
               private componentComService: ComponentComService,
               private facade: HangarsFacade) {
               }

  ngOnInit() {

    this.isHangarSelected = false;

    this.hangarsPage$ = this.facade.hangarsPage$;

    this.getHangarsPage(this.currentPage, this.items);
  }

  getHangarsPage(page: number, items: number) {
    this.facade.loadHangarsPage(page, items);
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

  public hangarEdit( hangar: Hangar ) {
    this.componentComService.collectData(hangar);
    this.router.navigate(['hangar/edit', hangar.id]);
  }



  public addNewHangar() {
    console.log('Navigating to new hangar form');
    this.router.navigate(['hangars/add']);
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

  pageChanged(page) {
    this.currentPage = page - 1;
    this.getHangarsPage(this.currentPage, this.items);
  }


}
