import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/core/services/auth/authentication.service';
import { CartFacade } from 'src/app/core/state/cart/cart.facade';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  productsCount$: Observable<number>;

  constructor(
    public authenticationService: AuthenticationService,
    private cartFacade: CartFacade) {
      this.productsCount$ = this.cartFacade.productsCount$;
    }

  ngOnInit() {
  }

}
