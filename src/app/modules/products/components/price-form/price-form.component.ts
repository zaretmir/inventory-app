import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Price } from 'src/app/core/models/price.model';
import { ProductApiService } from 'src/app/core/services/product-api.service';

@Component({
  selector: 'app-price-form',
  templateUrl: './price-form.component.html',
  styleUrls: ['./price-form.component.css']
})
export class PriceFormComponent implements OnInit {

  price: Price = new Price();

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
    this.price.product = this.productApiService.getAllProducts[0];
    console.log(this.price.product);

    return this.newPriceEntry.emit( this.price );
  }

}
