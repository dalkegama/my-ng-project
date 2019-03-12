import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MspCommonModule } from '@solarwinds/msp-common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { GetInTouchComponent } from './get-in-touch/get-in-touch.component';

@NgModule({
  declarations: [AppComponent, NavComponent, GetInTouchComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MspCommonModule,
    DashboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
