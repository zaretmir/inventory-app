import { Component, OnInit } from '@angular/core';
import { ProductsFacade } from 'src/app/core/state/products/products.facade';
import { Product } from 'src/app/core/models/product';
import { Observable } from 'rxjs';
import { RouterFacade } from 'src/app/core/state/router/router.facade';
import { map } from 'rxjs/operators';
import { RouterReducerState } from '@ngrx/router-store';
import { RouterStateUrl } from 'src/app/core/state/router/router.reducer';

@Component({
  selector: 'app-product-form-view',
  templateUrl: './product-form-view.component.html',
  styleUrls: ['./product-form-view.component.css']
})
export class ProductFormViewComponent {

  product$: Observable<Product>;

  isReadOnly$: Observable<boolean>;
  isAddNew$: Observable<boolean>;

  constructor(
    private productsFacade: ProductsFacade,
    private routerFacade: RouterFacade
    ) {
    this.product$ = this.productsFacade.selectedProduct$;
    this.isAddNew$ = this.routerFacade.router$.pipe(
      map((reducerState: RouterReducerState<RouterStateUrl>) => reducerState.state.url),
      map((url) => url.includes('add'))
    );
    this.isReadOnly$ = this.routerFacade.router$.pipe(
      map((reducerState: RouterReducerState<RouterStateUrl>) => reducerState.state.url),
      map((url) => url.includes('details')));
  }

  onSumbit(product: Product) {
    this.productsFacade.submitProduct(product);
  }


}
