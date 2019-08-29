import { Component, OnInit, Input } from '@angular/core';
import { ProductHangarApiService } from 'src/app/core/services/product-hangar-api.service';
import { ProductExcerpt } from 'src/app/core/models/product-excerpt.model';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductHangar } from 'src/app/core/models/product-hangar.model';
import { ProviderAstType } from '@angular/compiler';

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
  products: ProductExcerpt[] = new Array<ProductExcerpt>();

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
    const product = new ProductHangar();
    product.hangarpk = +this.hangarId;
    product.productpk = product_id;
    product.qtyph = this.qty.value;

    this.productHangarApiService.addProductToHangar(product).subscribe();
  }

  get qty() {
    return this.editStockForm.get('qty');
  }

}
