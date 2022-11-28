import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo/demo.component';

console.log("hellooooo")

@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LazyModule { }
