import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HangarApiService } from 'src/app/core/services/hangar-api.service';
import { ProductApiService } from 'src/app/core/services/product-api.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  results: any[] = [];

  @Output() charInserted = new EventEmitter<any>();

  constructor(
    private hangarApiService: HangarApiService,
    private productApiService: ProductApiService ) { }

  ngOnInit() { }

  triggerSearch(term: string) {
    console.log(term);
    this.charInserted.emit(term);

    /*
    this.productApiService.getProductSearchResults(term).subscribe(
      response => {
        this.results = response;
      },
      err => console.log(err),
      () => console.log('Search completed')
    );

    this.hangarApiService.getHangarSearchReults(term).subscribe(
      response => console.log(response),
      err => console.log(err),
      () => console.log('Search completed')
    );
    */
  }

}
