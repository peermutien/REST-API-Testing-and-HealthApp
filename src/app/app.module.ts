import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiTestingComponent } from './api-testing/api-testing.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HealthStatusComponent } from './health-status/health-status.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HealthDynamicComponent } from './health-dynamic/health-dynamic.component';

@NgModule({
  declarations: [
    AppComponent,
    ApiTestingComponent,
    HealthStatusComponent,
    HealthDynamicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
