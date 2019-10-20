import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HangarsFacade } from 'src/app/core/state/hangars/hangars.facade';
import { Observable } from 'rxjs';
import { HangarPage } from 'src/app/core/models/hangarPage';
import { SidenavComponent } from '../../components/sidenav/sidenav.component';

@Component({
  selector: 'app-hangars',
  templateUrl: './hangars.component.html',
  styleUrls: ['./hangars.component.css']
})
export class HangarsComponent implements OnInit {

  @ViewChild(SidenavComponent, {static: false})
  menu: SidenavComponent;

  // Pagination
  currentPage = 0;
  items = 5;
  total: number;

  selectedHangarId: number = null;

  hangarsPage$: Observable<HangarPage>;
  preselectedHangarId$: Observable<number>;

  constructor(
    private router: Router,
    private hangarsFacade: HangarsFacade
    ) {}

  ngOnInit() {
    this.hangarsPage$ = this.hangarsFacade.hangarsPage$;
    this.getHangarsPage(this.currentPage, this.items);
  }

  getHangarsPage(page: number, items: number) {
    this.hangarsFacade.loadHangarsPage(page, items);
  }

  public setSelectedHangar(hangarId: number) {  // TODO: improve this function
    if (hangarId === this.selectedHangarId) {
      this.menu.toggle();
    } else {
      this.menu.isOpen = false;
      this.selectedHangarId = hangarId;
      this.hangarsFacade.setPreselectedHangar(this.selectedHangarId);
      this.menu.toggle();
    }
  }

  public hangarForm() {
    this.router.navigate(['/hangars/details', this.selectedHangarId]);
  }

  public onClickManage() {
    this.router.navigate(['/hangars/manage', this.selectedHangarId]);

  }

  public onClickRemove() {
    console.log('remove');
  }

  public onClickEdit() {
    this.router.navigate(['hangars/edit', this.selectedHangarId]);
  }

  public addNewHangar() {
    this.router.navigate(['hangars/add']);
  }

  pageChanged(page: number) {
    this.currentPage = page - 1;
    this.getHangarsPage(this.currentPage, this.items);
  }


}
