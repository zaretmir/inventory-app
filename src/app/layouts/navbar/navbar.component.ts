import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/core/services/auth/authentication.service';
import { CartFacade } from 'src/app/core/state/cart/cart.facade';
import { TranslateService } from '@ngx-translate/core';
import { Icon } from 'src/app/shared/buttons/round-icon-button/round-icon-button.component';
import { UserDropdownComponent } from './user-dropdown/user-dropdown.component';
import { MenuSidebarComponent } from './menu-sidebar/menu-sidebar.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @ViewChild(UserDropdownComponent, {static: false})
  userDropdown: UserDropdownComponent;
  @ViewChild(MenuSidebarComponent, {static: false})
  sidebar: MenuSidebarComponent;


  productsCount$: Observable<number>;

  langTag: string;

  iconTypes = Icon;


  constructor(
    private translate: TranslateService,
    public authenticationService: AuthenticationService,
    private cartFacade: CartFacade
    ) {
      this.productsCount$ = this.cartFacade.productsCount$;
    }

  ngOnInit() {
    this.updateLangTag();
  }

  public switchLanguage() {
    if (this.translate.currentLang === 'es') {
      this.translate.use('en').subscribe(
        () => this.updateLangTag()
      );
    } else {
      this.translate.use('es').subscribe(
        () => this.updateLangTag()
      );
    }
  }

  private updateLangTag() {
    this.langTag = (this.translate.currentLang === 'en') ? 'es' : 'en';
  }

  toggleSidebar() {
    this.userDropdown.toggle(false);
    this.sidebar.toggle();
  }

  toggleUserMenu() {
    this.sidebar.toggle(true);
    this.userDropdown.toggle();
  }

}
