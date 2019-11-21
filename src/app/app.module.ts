// Angular modules
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Translation
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// Extras
import { AngularSvgIconModule } from 'angular-svg-icon';
// Pagination
import { NgxPaginationModule } from 'ngx-pagination';
// Application modules
import { AppRoutingModule } from './app-routing.module';
// Components
import { AppComponent } from './app.component';
// Services
import { BasicAuthHttpInterceptorService } from './core/services/auth/basic-auth-http-interceptor.service';
// Redux
import { StateModule } from './core/state/state.module';
import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { SharedModule } from './shared/shared.module';
import { CardComponent } from './views/home/components/card/card.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { LogoutComponent } from './views/logout/logout.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { RegistrationFormComponent } from './views/registration-form/registration-form.component';
import { UserDropdownComponent } from './layouts/navbar/user-dropdown/user-dropdown.component';
import { MenuSidebarComponent } from './layouts/navbar/menu-sidebar/menu-sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentLayoutComponent,
    NotFoundComponent,
    CardComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    RegistrationFormComponent,
    UserDropdownComponent,
    MenuSidebarComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    AngularSvgIconModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [ HttpClient ]
      }
    }),
    NgxPaginationModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    StateModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthHttpInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
