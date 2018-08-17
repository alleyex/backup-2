import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardModule } from './dashboard/dashboard.module';
import { TranslateApp } from './shared/interpret.model';
import { FirebaseModule } from './firebase/firebase.mudule';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FirebaseModule,
    DashboardModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateApp
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
