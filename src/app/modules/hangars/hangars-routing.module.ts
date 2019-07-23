import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HangarsComponent } from './views/hangars/hangars.component';
import { HangarFormComponent } from './components/hangar-form/hangar-form.component';
import { HangarDetailedViewComponent } from './views/hangar-detailed-view/hangar-detailed-view.component';


const routes: Routes = [
  { path: '', component: HangarsComponent},
  { path: 'add', component: HangarFormComponent },
  { path: 'details/:hangarid', component: HangarDetailedViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HangarsRoutingModule { }
