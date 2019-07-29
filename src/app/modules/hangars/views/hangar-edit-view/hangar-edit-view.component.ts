import { Component, OnInit } from '@angular/core';
import { Hangar } from 'src/app/core/models/hangar.model';
import { ComponentComService } from 'src/app/core/services/component-com.service';
import { HangarApiService } from 'src/app/core/services/hangar-api.service';

@Component({
  selector: 'app-hangar-edit-view',
  templateUrl: './hangar-edit-view.component.html',
  styleUrls: ['./hangar-edit-view.component.css']
})
export class HangarEditViewComponent implements OnInit {

  hangar: Hangar;

  constructor( private hangarApiService: HangarApiService,
               private componentComService: ComponentComService ) { }

  ngOnInit() {
    this.hangar = this.componentComService.retrieveData();
  }

  public editHangar( hangar: Hangar ) {
    this.hangarApiService.editHangar(hangar).subscribe(
      response => {
        console.log(response);
      }
    );
  }

}
