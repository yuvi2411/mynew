import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApitestingcompComponent } from './apitestingcomp/apitestingcomp.component';
import { ApiservService } from './apiserv.service';

@NgModule({
  declarations: [
    AppComponent,
    ApitestingcompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ApiservService],
  bootstrap: [AppComponent]
})
export class AppModule { }
