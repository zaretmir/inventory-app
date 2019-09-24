import { Component, OnInit } from '@angular/core';
import { ProductHangarApiService } from 'src/app/core/services/product-hangar-api.service';
import { Router, ActivatedRoute, ParamMap, Route } from '@angular/router';
import { ProductApiService } from 'src/app/core/services/product-api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StockEntry } from 'src/app/core/interfaces/stock-entry';

@Component({
  selector: 'app-hangar-manage-view',
  templateUrl: './hangar-manage-view.component.html',
  styleUrls: ['./hangar-manage-view.component.css']
})

export class HangarManageViewComponent implements OnInit {

  editStockForm = new FormGroup({
    qty: new FormControl('', Validators.required)
  });

  hangarid: number;
  products: StockEntry[];

  constructor( private route: ActivatedRoute,
               private router: Router,
               private productHangarApiService: ProductHangarApiService,
               private productApiService: ProductApiService )
  {
    this.hangarid = route.snapshot.params['hangarid'];
  }

  ngOnInit() {
    /*this.productHangarApiService.productsInHangar( this.hangarid ).subscribe(
      data => {
        this.products = data.map( item => this.productHangarApiService.mapToProductHangar(item) );
      }
    );*/
  }

  public viewProduct( productid: number) {
    console.log(productid);
  }

  public removeFromStock() {
    console.log('Remove from stock clicked');
  }

}
