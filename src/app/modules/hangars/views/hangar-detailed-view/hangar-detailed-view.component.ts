import { Component, OnInit } from '@angular/core';
import { Hangar } from 'src/app/core/models/hangar.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ComponentComService } from 'src/app/core/services/component-com.service';

@Component({
  selector: 'app-hangar-detailed-view',
  templateUrl: './hangar-detailed-view.component.html',
  styleUrls: ['./hangar-detailed-view.component.css']
})
export class HangarDetailedViewComponent implements OnInit {

  public hangar: Hangar = new Hangar();

  constructor(private router: Router,
              private componentComService: ComponentComService) {
  }

  ngOnInit() {
    this.hangar = this.componentComService.retrieveData();

    console.log('Nombre del hangar: ' + this.hangar.name);
  }



}
