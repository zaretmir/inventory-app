import { Component, OnInit } from '@angular/core';
import { Hangar } from 'src/app/core/models/hangar.model';
import { ApiService } from 'src/app/core/services/api.service';
import { ComponentComService } from 'src/app/core/services/component-com.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hangar-form-view',
  templateUrl: './hangar-form-view.component.html',
  styleUrls: ['./hangar-form-view.component.css']
})
export class HangarFormViewComponent implements OnInit {

  constructor( private router: Router,
               private apiService: ApiService,
               private componentComService: ComponentComService ) { }

  ngOnInit() {
  }

  postData(hangar: Hangar) {
    console.log(JSON.stringify(hangar));
    console.log(hangar);
    return this.apiService.postHangar(hangar).subscribe( response => {
      this.componentComService.collectData(response);
      hangar = this.componentComService.retrieveData(); // To retrieve id
      this.router.navigate(['/hangars/details', hangar.id]);
    });
  }

}
