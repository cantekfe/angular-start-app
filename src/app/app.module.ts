import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CEnergyChartModule } from '../../projects/c-energy-chart/src/public_api';
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    CEnergyChartModule
    ],

  declarations: [
    AppComponent
    ],

  bootstrap: [AppComponent]
})
export class AppModule { }
