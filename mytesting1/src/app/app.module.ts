import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApicompComponent } from './compfile/apicomp/apicomp.component';
import { ObscompComponent } from './compfile/obscomp/obscomp.component';
import { CustomdirectiveComponent } from './compfile/customdirective/customdirective.component';
import { DataSdirectDirective } from './compfile/customdirective/data-sdirect.directive';

@NgModule({
  declarations: [
    AppComponent,
    ApicompComponent,
    ObscompComponent,
    CustomdirectiveComponent,
    DataSdirectDirective
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
