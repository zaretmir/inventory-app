import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FloatingButtonPlusComponent } from './floating-button-plus/floating-button-plus.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [FloatingButtonPlusComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FloatingButtonPlusComponent
  ]
})
export class SharedModule { }
