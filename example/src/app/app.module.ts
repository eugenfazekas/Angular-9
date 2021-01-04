import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ApplicationrefComponent } from './applicationref/applicationref.component';


@NgModule({
  declarations: [
    AppComponent,ProductComponent,ApplicationrefComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
