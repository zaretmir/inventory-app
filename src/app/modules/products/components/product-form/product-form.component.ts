import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/core/models/product';
import { ProductApiService } from 'src/app/core/services/product-api.service';
import { tassign } from 'tassign';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  @Input() product?: Product;
  @Input() isReadOnly: boolean;

  @Output() submited = new EventEmitter<Product>();

  productForm = new FormGroup({
    name: new FormControl(
      '',
      [Validators.required, Validators.minLength(3)]),
    description: new FormControl(
      '',
      [Validators.required, Validators.maxLength(250)])
  });

  constructor() { }

  ngOnInit() {
    if (this.isReadOnly) {
      this.productForm.disable();
    }
    if (this.product) {
      this.productForm.patchValue(this.product);
    }
  }

  get name() { return this.productForm.get('name'); }
  get description() { return this.productForm.get('description'); }

  public submit() {
    const productUpdate: Product = tassign(this.product, this.productForm.value);
    this.submited.emit(productUpdate);
  }
}
