import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StatisticalBoxComponent } from "./statistical-box.component";
import { TotalCountComponent } from "./total-count.component";
import { FilterComponent } from "./filter.component";

@NgModule({
  declarations: [
    AppComponent,
    StatisticalBoxComponent,
    TotalCountComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
