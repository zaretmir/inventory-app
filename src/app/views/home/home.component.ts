import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public hangarCard: any;
  public productCard: any;

  constructor( private translate: TranslateService ) { }

  // constructor( ) { }

  ngOnInit() {

    this.translate.get(['hangar', 'product']).subscribe(
      translations => {

        this.hangarCard = {
          title: translations.hangar.gPl,
          text: translations.hangar.gTxt,
          routePath: '/hangars'
        };

        this.productCard = {
          title: translations.product.gPl,
          text: translations.product.gTxt,
          routePath: '/products'
        };

      }
    );

    /*

    this.hangarCard = {
      title: 'Hangars',
      text: 'Texto de prueba',
      routePath: '/hangars'
    };


    this.productCard = {
      title: 'Products',
      text: 'Texto de prueba',
      routePath: '/products'
    };
    */
  }

}
