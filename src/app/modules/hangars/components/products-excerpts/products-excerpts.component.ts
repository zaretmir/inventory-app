import { Component, OnInit, Input } from '@angular/core';
import { ProductHangarApiService } from 'src/app/core/services/product-hangar-api.service';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductExcerpt } from 'src/app/core/interfaces/product-excerpt';
import { Product } from 'src/app/core/interfaces/product';
import { StockEntry } from 'src/app/core/interfaces/stock-entry';

@Component({
  selector: 'app-products-excerpts',
  templateUrl: './products-excerpts.component.html',
  styleUrls: ['./products-excerpts.component.css']
})
export class ProductsExcerptsComponent implements OnInit {

  editStockForm = new FormGroup({
    qty: new FormControl('', Validators.required)
  });

  @Input() isEditable = false;

  hangarId: number;
  products: ProductExcerpt[];

  constructor( private route: ActivatedRoute,
               private productHangarApiService: ProductHangarApiService ) { }

  ngOnInit() {

    // If using view
    this.route.params.pipe(first()).subscribe(
      params => this.hangarId = params.hangarid,
      err => console.log(err),
      () => this.getProductsExcerpt(this.hangarId)
    );
  }

  getProductsExcerpt(hangarId: number) {

    this.productHangarApiService.getProductsInHangarExcerpt(hangarId).subscribe(
      data => {
        this.products = data;
      }
    );
  }

  public viewProduct( productid: number) {
    console.log(productid);
  }

  public removeFromStock() {
    console.log('Remove from stock clicked');
  }

  public updateQty(product_id: number) {
    const stockEntry = {} as StockEntry;
    stockEntry.hangarPk = +this.hangarId;
    stockEntry.productPk = product_id;
    stockEntry.quantity = this.qty.value;
    console.log(stockEntry.quantity);

    this.productHangarApiService.addProductToHangar(stockEntry).subscribe();
  }

  get qty() {
    return this.editStockForm.get('qty');
  }

}
