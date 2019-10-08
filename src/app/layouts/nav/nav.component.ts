import { Component, OnInit, Output, EventEmitter, OnChanges, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthenticationService } from 'src/app/core/services/auth/authentication.service';
import { CartFacade } from 'src/app/core/state/cart/cart.facade';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  itemsCount$: Observable<number>;


  constructor(
    public authenticationService: AuthenticationService,
    private cartFacade: CartFacade) {
      this.itemsCount$ = this.cartFacade.itemsCount$;
    }

  ngOnInit() {

  }

}
