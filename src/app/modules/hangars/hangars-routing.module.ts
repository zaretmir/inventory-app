import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HangarsComponent } from './views/hangars/hangars.component';
import { HangarDetailedViewComponent } from './views/hangar-detailed-view/hangar-detailed-view.component';
import { HangarFormViewComponent } from './views/hangar-form-view/hangar-form-view.component';
import { HangarEditViewComponent } from './views/hangar-edit-view/hangar-edit-view.component';
import { HangarManageViewComponent } from './views/hangar-manage-view/hangar-manage-view.component';


const routes: Routes = [
  { path: '', component: HangarsComponent},
  { path: 'add', component: HangarFormViewComponent },
  { path: 'details/:hangarid', component: HangarDetailedViewComponent },
  { path: 'edit/:hangarid', component: HangarEditViewComponent },
  { path: 'manage/:hangarid', component: HangarManageViewComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HangarsRoutingModule { }
