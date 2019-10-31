// Angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Application modules
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

// Services
import { BasicAuthHttpInterceptorService } from './core/services/auth/basic-auth-http-interceptor.service';

// Translation
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// Pagination
import { NgxPaginationModule } from 'ngx-pagination';

// Components
import { AppComponent } from './app.component';
import { NavComponent } from './layouts/nav/nav.component';
import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { CardComponent } from './views/home/components/card/card.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { LogoutComponent } from './views/logout/logout.component';
import { RegistrationFormComponent } from './views/registration-form/registration-form.component';
import { HeaderComponent } from './layouts/header/header.component';

// Redux
import { StateModule } from './core/state/state.module';
import { NavbarComponent } from './layouts/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContentLayoutComponent,
    NotFoundComponent,
    CardComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    RegistrationFormComponent,
    HeaderComponent,
    NavbarComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
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
