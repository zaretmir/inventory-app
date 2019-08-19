import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { LoginComponent } from './views/login/login.component';
import { LogoutComponent } from './views/logout/logout.component';
import { AuthGuardService } from './core/services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: ContentLayoutComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        component: HomeComponent
      }
    ]
  },
  {
    path: 'login',
    component: ContentLayoutComponent,
    children: [
      {
        path: '',
        component: LoginComponent
      }
    ]
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'hangars',
    component: ContentLayoutComponent,
    canActivate: [AuthGuardService],
    loadChildren: () => import(`./modules/hangars/hangars.module`).then( m => m.HangarsModule)
  },
  {
    path: 'products',
    component: ContentLayoutComponent,
    canActivate: [AuthGuardService],
    loadChildren: () => import(`./modules/products/products.module`).then( m => m.ProductsModule)
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
