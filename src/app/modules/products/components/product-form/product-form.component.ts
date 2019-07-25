import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';

import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  @Input() inputProduct: Product;
  @Input() isReadOnly: boolean;

  productForm = new FormGroup({
    name: new FormControl(
      '',
      [Validators.required]),
    description: new FormControl(
      '',
      [Validators.required])
  });

  constructor() { }

  ngOnInit() {
    if (this.isReadOnly) {
      this.name.setValue(this.inputProduct.name);
      this.description.setValue(this.inputProduct.description);
    }
  }

  get name() {
    return this.productForm.get('name');
  }

  get description() {
    return this.productForm.get('description');
  }

}
