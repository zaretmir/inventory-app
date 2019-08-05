import { Component, OnInit } from '@angular/core';
import { Hangar } from 'src/app/core/models/hangar.model';
import { Router } from '@angular/router';
import { ComponentComService } from 'src/app/core/services/component-com.service';
import { ProductHangar } from 'src/app/core/models/product-hangar.model';
import { ProductHangarApiService } from 'src/app/core/services/product-hangar-api.service';

@Component({
  selector: 'app-hangar-detailed-view',
  templateUrl: './hangar-detailed-view.component.html',
  styleUrls: ['./hangar-detailed-view.component.css']
})
export class HangarDetailedViewComponent implements OnInit {

  public hangar: Hangar = new Hangar();
  products: ProductHangar[] = new Array<ProductHangar>();

  constructor(private router: Router,
              private componentComService: ComponentComService,
              private productHangarApiService: ProductHangarApiService) {
  }

  ngOnInit() {
    this.hangar = this.componentComService.retrieveData();
    this.productHangarApiService.productsInHangar(this.hangar.id).subscribe(
      data => {
        this.products = data.map( item => this.productHangarApiService.mapToProductHangar(item) );
        console.log(this.products);
      }
    );


  }



}
