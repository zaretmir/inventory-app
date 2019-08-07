import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FloatingButtonPlusComponent } from './floating-button-plus/floating-button-plus.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { SearchbarComponent } from './searchbar/searchbar.component';



@NgModule({
  declarations: [FloatingButtonPlusComponent, SearchbarComponent],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule
  ],
  exports: [
    FloatingButtonPlusComponent,
    SearchbarComponent
  ]
})
export class SharedModule { }
