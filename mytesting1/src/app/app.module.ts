import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApicompComponent } from './compfile/apicomp/apicomp.component';
import { ObscompComponent } from './compfile/obscomp/obscomp.component';
import { CustomdirectiveComponent } from './compfile/customdirective/customdirective.component';
import { DataSdirectDirective } from './compfile/customdirective/data-sdirect.directive';
import { FormsassgnComponent } from './compfile/formsassgn/formsassgn.component';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import { WishComponent } from './compfile/wish/wish.component';
import { LoginBookComponent } from './compfile/login-book/login-book.component';
import { TokenApiInterceptor } from './interceptors/token-api.interceptor';
import { BookAssgnComponent } from './compfile/book-assgn/book-assgn.component';
import { LoginpageComponent } from './compfile/loginpage/loginpage.component';
import { HomePageComponent } from './compfile/home-page/home-page.component';
import { LazyModule } from './lazy/lazy.module';

@NgModule({
  declarations: [
    AppComponent,
    ApicompComponent,
    ObscompComponent,
    CustomdirectiveComponent,
    DataSdirectDirective,
    FormsassgnComponent,
    WishComponent,
    LoginBookComponent,
    BookAssgnComponent,
    LoginpageComponent,
    HomePageComponent,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LazyModule
   
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: TokenApiInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
