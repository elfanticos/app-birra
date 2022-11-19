import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RequestInterceptorService } from './interceptors/request.service';

const REQUEST_INTERCEPTOR = { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptorService, multi: true };

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    REQUEST_INTERCEPTOR
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
