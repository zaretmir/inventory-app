import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { LoginComponent } from './views/login/login.component';
import { LogoutComponent } from './views/logout/logout.component';
import { AuthGuardService } from './core/services/auth/auth-guard.service';
import { RegistrationFormComponent } from './views/registration-form/registration-form.component';

const routes: Routes = [
  {
    path: '',
    component: ContentLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'home',
        canActivate: [AuthGuardService],
        component: HomeComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        // canActivate: [AuthGuardService],
        component: RegistrationFormComponent
      },
      {
        path: 'logout',
        canActivate: [AuthGuardService],
        component: LogoutComponent
      }
    ]
  },
  {
    path: 'hangars',
    component: ContentLayoutComponent,
    canActivate: [AuthGuardService],
    loadChildren: './modules/hangars/hangars.module#HangarsModule'
  },
  {
    path: 'products',
    component: ContentLayoutComponent,
    canActivate: [AuthGuardService],
    loadChildren: './modules/products/products.module#ProductsModule'
  },
  {
    path: 'cart',
    component: ContentLayoutComponent,
    canActivate: [AuthGuardService],
    loadChildren: './modules/shop/shop.module#ShopModule'
  },
  {
    path: 'user-dashboard',
    component: ContentLayoutComponent,
    canActivate: [AuthGuardService],
    loadChildren: './modules/user/user.module#UserModule'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
