import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { Product } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-products-view-all',
  templateUrl: './products-view-all.component.html',
  styleUrls: ['./products-view-all.component.css']
})
export class ProductsViewAllComponent implements OnInit {

  products: Array<Product> = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {

    this.apiService.getAllProducts().subscribe(
      data => {
        this.products = data.map( (item: Product) => this.mapResponse(item) );
        console.log(this.products);
      }
    );
  }

  private mapResponse(response: any): Product {
    const product = new Product();

    product.id = response.id;
    product.name = response.name;
    product.description = response.description;

    return product;

  }

  selectButtonAction() {
    console.log('Accion de boton desde products-view-all');
  }





}
