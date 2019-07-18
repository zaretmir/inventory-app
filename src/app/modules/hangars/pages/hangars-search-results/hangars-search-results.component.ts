import { Component, OnInit } from '@angular/core';
import { Hangar } from 'src/app/core/models/hangar.model';

@Component({
  selector: 'app-hangars-search-results',
  templateUrl: './hangars-search-results.component.html',
  styleUrls: ['./hangars-search-results.component.css']
})
export class HangarsSearchResultsComponent implements OnInit {

  hangar: Hangar = new Hangar();

  constructor( ) { }

  ngOnInit() {

    this.hangar.name = 'My hangar';
    this.hangar.address = 'Sacramento, CA';

  }

}
