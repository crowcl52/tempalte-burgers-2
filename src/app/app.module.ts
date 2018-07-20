import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Ng2StickyModule } from 'ng2-sticky';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Section1Component } from './section1/section1.component';
import { Section2Component } from './section2/section2.component';
import { Section3Component } from './section3/section3.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Section1Component,
    Section2Component,
    Section3Component
  ],
  imports: [
    BrowserModule,
    Ng2StickyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
