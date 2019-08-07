import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Translation
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// Pagination
import { NgxPaginationModule } from 'ngx-pagination';

// Components
import { AppComponent } from './app.component';
import { NavComponent } from './layouts/nav/nav.component';
import { SideNavComponent } from './layouts/side-nav/side-nav.component';
import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { CardComponent } from './views/home/components/card/card.component';
import { HomeComponent } from './views/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SideNavComponent,
    ContentLayoutComponent,
    NotFoundComponent,
    CardComponent,
    HomeComponent
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
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
