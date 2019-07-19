import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HangarsComponent } from './pages/hangars/hangars.component';
import { HangarFormComponent } from './components/hangar-form/hangar-form.component';


const routes: Routes = [
  { path: '', component: HangarsComponent},
  { path: 'add', component: HangarFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HangarsRoutingModule { }
