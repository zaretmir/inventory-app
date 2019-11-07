import { Component, OnInit, Input } from '@angular/core';
import { StockEntry } from 'src/app/core/models/stock-entry';

@Component({
  selector: 'app-stock-entry-data',
  templateUrl: './stock-entry-data.component.html',
  styleUrls: ['./stock-entry-data.component.scss']
})
export class StockEntryDataComponent implements OnInit {

  @Input() stockEntry: StockEntry;
  expanded = false;

  constructor() { }

  ngOnInit() {
  }

  toggleExpand() {
    !this.expanded;
    console.log('toggle expand');
  }

}
