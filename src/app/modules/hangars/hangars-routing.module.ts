import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HangarsComponent } from './views/hangars/hangars.component';
import { HangarFormViewComponent } from './views/hangar-form-view/hangar-form-view.component';
import { HangarManageViewComponent } from './views/hangar-manage-view/hangar-manage-view.component';


const routes: Routes = [
  { path: '', component: HangarsComponent},
  { path: 'add', component: HangarFormViewComponent },
  { path: 'details/:hangarId', component: HangarFormViewComponent },
  { path: 'edit/:hangarId', component: HangarFormViewComponent },
  { path: 'manage/:hangarId', component: HangarManageViewComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HangarsRoutingModule { }
