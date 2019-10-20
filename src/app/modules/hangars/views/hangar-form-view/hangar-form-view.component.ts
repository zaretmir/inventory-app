import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hangar } from 'src/app/core/models/hangar';
import { HangarsFacade } from 'src/app/core/state/hangars/hangars.facade';

@Component({
  selector: 'app-hangar-form-view',
  templateUrl: './hangar-form-view.component.html',
  styleUrls: ['./hangar-form-view.component.css']
})
export class HangarFormViewComponent implements OnInit {

  hangar: Hangar = null;

  isReadOnly: boolean;

  constructor(
    private hangarsFacade: HangarsFacade
    ) { }

  ngOnInit() {
  }

  onUpdate(hangar: Hangar) {
    this.hangarsFacade.updateHangar(hangar);
  }

  onSubmit(hangar: Hangar) {
    this.hangarsFacade.addHangar(hangar);
    // TODO: Retrieve id and navigate to details
    //this.router.navigate(['/hangars/details', hangar.id]);
  }

}
