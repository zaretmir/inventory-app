import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HangarsSearchResultsComponent } from './pages/hangars-search-results/hangars-search-results.component';


const routes: Routes = [
  { path: 'hangars', component: HangarsSearchResultsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HangarsRoutingModule { }
