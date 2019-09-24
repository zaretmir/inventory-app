import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/core/interfaces/product';
import { ProductApiService } from 'src/app/core/services/product-api.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  @Input() inputProduct: Product;
  @Input() isReadOnly: boolean;
  @Input() isUpdate: boolean;

  @Output() submited = new EventEmitter<Product>();

  productForm = new FormGroup({
    name: new FormControl(
      '',
      [Validators.required, Validators.minLength(3)]),
    description: new FormControl(
      '',
      [Validators.required, Validators.maxLength(250)])
  });

  constructor(private productApiService: ProductApiService) { }

  ngOnInit() {
    if (this.isReadOnly || this.isUpdate) {
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

  public onSubmitClicked() {
    if (this.isUpdate) {
      this.updateProduct(this.productForm.value);
    } else {
      this.postProduct(this.productForm.value);
    }
  }

  updateProduct(product: Product) {
    product.id = this.inputProduct.id;
    product.active = true;
    console.log(product);
    this.productApiService.editProduct(product)
    .subscribe(
      response => {
        console.log(response);
      },
      (error: Response) => {
        if (error.status === 400) {
          alert('Bad request');
          console.log(error);
        } else {
          alert('Unexpected error');
          console.log(error);
        }
      });
  }

  postProduct(product: Product) {
    this.productApiService.postProduct(product)
      .subscribe(
        response => {
          console.log(response);
        },
        (error: Response) => {
          if (error.status === 400) {
            alert('Bad request');
          } else {
            alert('Unexpected error');
          }
        });
  }

}
