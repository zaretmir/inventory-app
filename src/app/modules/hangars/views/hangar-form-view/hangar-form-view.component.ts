import { Component, OnInit } from '@angular/core';
import { ComponentComService } from 'src/app/core/services/component-com.service';
import { Router } from '@angular/router';
import { HangarApiService } from 'src/app/core/services/hangar-api.service';
import { Hangar } from 'src/app/core/interfaces/hangar';

@Component({
  selector: 'app-hangar-form-view',
  templateUrl: './hangar-form-view.component.html',
  styleUrls: ['./hangar-form-view.component.css']
})
export class HangarFormViewComponent implements OnInit {

  constructor( private router: Router,
               private hangarApiService: HangarApiService,
               private componentComService: ComponentComService ) { }

  ngOnInit() {
  }

  postData(hangar: Hangar) {
    console.log(JSON.stringify(hangar));
    console.log(hangar);
    hangar.isActive = true;
    return this.hangarApiService.postHangar(hangar).subscribe( response => {
      this.componentComService.collectData(response);
      hangar = this.componentComService.retrieveData(); // To retrieve id
      this.router.navigate(['/hangars/details', hangar.id]);
    });
  }

}
