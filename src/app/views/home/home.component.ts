import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public hangarCard: any;
  public productCard: any;

  constructor() { }

  ngOnInit() {

    this.hangarCard = {
      title: 'Hangars',
      text: 'Texto de prueba'
    };

    this.productCard = {
      title: 'Products',
      text: 'Texto de prueba'
    };
  }

}
