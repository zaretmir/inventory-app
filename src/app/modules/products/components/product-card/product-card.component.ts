import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';
import { ProductApiService } from 'src/app/core/services/product-api.service';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product: Product;
  @Output() clickedDetails = new EventEmitter<Product>();
  @Output() clickedEdit = new EventEmitter<Product>();
  @Output() clickedRemove = new EventEmitter<Product>();


  constructor( private productApiService: ProductApiService)  {
  }

  ngOnInit() {
  }

  onClickMore() {
    console.log('Clicked Details');
    this.clickedDetails.emit(this.product);
  }

  onClickEdit() {
    console.log('Clicked edit');
    this.clickedEdit.emit(this.product);
  }

  onClickRemove() {
    console.log('Clicked remove');
    console.log(this.product.id);
    this.productApiService.removeProduct(this.product.id.toString()).subscribe();
    //this.clickedRemove.emit(this.product);
  }

}
