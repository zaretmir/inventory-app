import { Component, OnInit } from '@angular/core';
import { ProductHangarApiService } from 'src/app/core/services/product-hangar-api.service';
import { ProductExcerpt } from 'src/app/core/models/product-excerpt.model';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-products-excerpts',
  templateUrl: './products-excerpts.component.html',
  styleUrls: ['./products-excerpts.component.css']
})
export class ProductsExcerptsComponent implements OnInit {

  id: number;
  products: ProductExcerpt[] = new Array<ProductExcerpt>();

  constructor( private route: ActivatedRoute,
               private productHangarApiService: ProductHangarApiService ) { }

  ngOnInit() {

    // If using view
    this.route.params.pipe(first()).subscribe(
      params => this.id = params.hangarid,
      err => console.log(err),
      () => this.getProductsExcerpt(this.id)
    );
  }

  getProductsExcerpt(hangarId: number) {

    this.productHangarApiService.getProductsInHangarExcerpt(hangarId).subscribe(
      data => this.products = data
    );
  }

  public viewProduct( productid: number) {
    console.log(productid);
  }

  public removeFromStock() {
    console.log('Remove from stock clicked');
  }

}
