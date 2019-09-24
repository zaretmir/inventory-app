import { Component, OnInit } from '@angular/core';
import { ComponentComService } from 'src/app/core/services/component-com.service';
import { HangarApiService } from 'src/app/core/services/hangar-api.service';
import { ProductHangarApiService } from 'src/app/core/services/product-hangar-api.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Hangar } from 'src/app/core/interfaces/hangar';
import { StockEntry } from 'src/app/core/interfaces/stock-entry';

@Component({
  selector: 'app-hangar-edit-view',
  templateUrl: './hangar-edit-view.component.html',
  styleUrls: ['./hangar-edit-view.component.css']
})
export class HangarEditViewComponent implements OnInit {

  hangarid: number;
  hangar: Hangar;
  products: StockEntry[];

  id: number;
  isDataReady = false;

  constructor( private hangarApiService: HangarApiService,
               private componentComService: ComponentComService,
               private route: ActivatedRoute,
               private router: Router ) { }

  ngOnInit() {

    this.getHangar();

    /*
    this.hangarid = this.route.snapshot.params['hangarid'];
    this.hangar = this.componentComService.retrieveData();
    */
  }

  getHangar() {
    this.route.params.subscribe( params => this.id = params.hangarid );
    console.log('Getting hangar');

    this.hangarApiService.getHangarById(this.id).subscribe(
      data => {
        this.hangar = data;
        this.isDataReady = true;
      }
    );
  }

  public editHangar( hangar: Hangar ) {
    hangar.id = this.hangar.id;
    this.hangarApiService.editHangar(hangar).subscribe(
      response => {
        this.router.navigate(['../../details', hangar.id], {relativeTo: this.route});
      }
    );
  }



}
