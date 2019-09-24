import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ProductApiService } from 'src/app/core/services/product-api.service';
import { Price } from 'src/app/core/interfaces/price';
import { StockEntry } from 'src/app/core/interfaces/stock-entry';

@Component({
  selector: 'app-price-form',
  templateUrl: './price-form.component.html',
  styleUrls: ['./price-form.component.css']
})
export class PriceFormComponent implements OnInit {

  price: Price;
  @Input() stockEntry: StockEntry;
  @Output() newPriceEntry = new EventEmitter<Price>();

  priceEntryForm = new FormGroup({
    figure: new FormControl(
      '',
      [Validators.required])
  });

  constructor( private productApiService: ProductApiService ) {
  }

  ngOnInit() {
  }

  onSubmit() {
    const date = new Date();
    console.log(date.getTime().toString());
    this.price.dateUpdated = date.getTime();
    this.price.price = this.priceEntryForm.get('figure').value;
    this.price.stockEntry = this.stockEntry;
    console.log(this.price.stockEntry);

    return this.newPriceEntry.emit( this.price );
  }

}
