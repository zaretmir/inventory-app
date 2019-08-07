import { Component, OnInit } from '@angular/core';
import { Hangar } from 'src/app/core/models/hangar.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ComponentComService } from 'src/app/core/services/component-com.service';
import { ProductHangar } from 'src/app/core/models/product-hangar.model';
import { ProductHangarApiService } from 'src/app/core/services/product-hangar-api.service';
import { HangarApiService } from 'src/app/core/services/hangar-api.service';

@Component({
  selector: 'app-hangar-detailed-view',
  templateUrl: './hangar-detailed-view.component.html',
  styleUrls: ['./hangar-detailed-view.component.css']
})
export class HangarDetailedViewComponent implements OnInit {

  id: number;

  public hangar: Hangar = new Hangar();
  products: ProductHangar[] = new Array<ProductHangar>();

  isDataReady = false;

  constructor(private route: ActivatedRoute,
              private componentComService: ComponentComService,
              private productHangarApiService: ProductHangarApiService,
              private hangarApiService: HangarApiService) {
  }

  ngOnInit() {

    // this.hangar = this.componentComService.retrieveData();

    this.getHangar();
    this.getProductsInHangar();
  }

  getHangar() {
    this.route.params.subscribe( params => this.id = params.hangarid );

    this.hangarApiService.getHangarById(this.id).subscribe(
      data => {
        this.hangar = this.hangarApiService.mapToHangar(data);
        this.isDataReady = true;
      }
    );
  }

  getProductsInHangar() {
    this.productHangarApiService.productsInHangar(this.id).subscribe(
      data => {
        this.products = data.map( item => this.productHangarApiService.mapToProductHangar(item) );
        console.log(this.products);
      }
    );
  }



}
