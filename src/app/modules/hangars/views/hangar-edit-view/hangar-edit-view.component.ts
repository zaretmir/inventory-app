import { Component, OnInit } from '@angular/core';
import { Hangar } from 'src/app/core/models/hangar.model';
import { ComponentComService } from 'src/app/core/services/component-com.service';
import { HangarApiService } from 'src/app/core/services/hangar-api.service';
import { ProductHangar } from 'src/app/core/models/product-hangar.model';
import { ProductHangarApiService } from 'src/app/core/services/product-hangar-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hangar-edit-view',
  templateUrl: './hangar-edit-view.component.html',
  styleUrls: ['./hangar-edit-view.component.css']
})
export class HangarEditViewComponent implements OnInit {

  hangarid: number;
  hangar: Hangar;
  products: ProductHangar[] = new Array<ProductHangar>();

  constructor( private hangarApiService: HangarApiService,
               private componentComService: ComponentComService,
               private route: ActivatedRoute ) { }

  ngOnInit() {
    this.hangarid = this.route.snapshot.params['hangarid'];
    console.log('Id hangar: ' + this.hangarid);
    this.hangar = this.componentComService.retrieveData();
  }

  public editHangar( hangar: Hangar ) {
    hangar.id = this.hangarid;
    console.log('Desde edit: ');
    console.log(hangar);
    this.hangarApiService.editHangar(hangar).subscribe(
      response => {
        console.log('Response: ');
        console.log(response);
      }
    );
  }



}
