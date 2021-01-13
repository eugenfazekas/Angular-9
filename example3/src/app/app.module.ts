import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductModule } from './product/product.module';
import { NxCommonModule } from './common/common-module';

@NgModule({
  declarations: [
    AppComponent, 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ProductModule,
    NxCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
