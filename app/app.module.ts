import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TestComponent } from './test.component';
import { ViewportHelpersModule } from "./shared/viewport-helpers/viewport-helpers.module";

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    ViewportHelpersModule.forRoot({
      medium: 700,
      large: 1024
    })
  ],
  declarations: [ AppComponent, HelloComponent, TestComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
