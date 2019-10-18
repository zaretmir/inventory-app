import { Component, OnInit, Input } from '@angular/core';
import { StockEntry } from 'src/app/core/models/stock-entry';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Price } from 'src/app/core/models/price';

@Component({
  selector: 'app-stock-entry-form',
  templateUrl: './stock-entry-form.component.html',
  styleUrls: ['./stock-entry-form.component.css']
})
export class StockEntryFormComponent implements OnInit {

  @Input() stockEntry: StockEntry;

  stockForm = this.formBuilder.group({
    hangarName: '',
    productName: '',
    quantity: '',
    priceEntries: this.formBuilder.array([])
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.stockForm.patchValue(this.stockEntry);
    this.stockEntry.priceHistory.forEach(priceEntry => {
      this.addPrice(priceEntry);
    });
  }

  createPrice(): FormGroup {
    return this.formBuilder.group({
      date: '',
      price: ''
    });
  }

  addPrice(priceEntry: Price | null) {
    console.log(priceEntry);
    const priceEntries = this.stockForm.controls.priceEntries as FormArray;
    priceEntries.push(this.formBuilder.group({
      dateUpdated: priceEntry.dateUpdated,
      price: priceEntry.price
    }));
  }

}
