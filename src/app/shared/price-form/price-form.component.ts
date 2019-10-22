import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ProductApiService } from 'src/app/core/services/product-api.service';
import { Price } from 'src/app/core/models/price';
import { StockEntry } from 'src/app/core/models/stock-entry';

@Component({
  selector: 'app-price-form',
  templateUrl: './price-form.component.html',
  styleUrls: ['./price-form.component.css']
})
export class PriceFormComponent implements OnInit {

  @Input() stockEntry: StockEntry;
  @Output() newPriceEntry = new EventEmitter<Price>();

  priceEntryForm = new FormGroup({
    price: new FormControl(
      '',
      [Validators.required])
  });

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit() {
    const priceEntry: Price = {
      price_id: null,
      stockEntry: this.stockEntry,
      price: this.priceEntryForm.get('price').value,
      dateUpdated: new Date().getTime()
    };

    return this.newPriceEntry.emit(priceEntry);
  }

}
