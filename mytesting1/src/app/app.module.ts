import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApicompComponent } from './compfile/apicomp/apicomp.component';
import { ObscompComponent } from './compfile/obscomp/obscomp.component';

@NgModule({
  declarations: [
    AppComponent,
    ApicompComponent,
    ObscompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
