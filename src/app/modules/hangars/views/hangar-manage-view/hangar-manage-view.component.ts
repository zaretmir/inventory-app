import { Component, OnInit } from '@angular/core';
import { ProductHangarApiService } from 'src/app/core/services/stock-api.service';
import { Router, ActivatedRoute, ParamMap, Route } from '@angular/router';
import { ProductApiService } from 'src/app/core/services/product-api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StockEntry } from 'src/app/core/models/stock-entry';

@Component({
  selector: 'app-hangar-manage-view',
  templateUrl: './hangar-manage-view.component.html',
  styleUrls: ['./hangar-manage-view.component.css']
})

export class HangarManageViewComponent {

  editStockForm = new FormGroup({
    qty: new FormControl('', Validators.required)
  });

  hangarid: number;
  products: StockEntry[];

  constructor(
    private route: ActivatedRoute,
    private router: Router
    ) {
    this.hangarid = route.snapshot.params.hangarid;
  }

  public viewProduct( productid: number) {
    console.log(productid);
  }

  public removeFromStock() {
    console.log('Remove from stock clicked');
  }

}
