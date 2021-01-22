import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { AppComponent } from './app.component';
import { TableComponent } from './core/table/table.component';
import { FormComponent } from './core/form/form.component';
import { MessageComponent } from './messages/message/message.component';
import { ModelModule } from './model/model.module';
import { CoreModule } from './core/core.module';
import { MessageModule } from './messages/message.module';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { TermsGuard } from './terms.guard';
import { LoadGuard } from './load.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestComponent } from './tests/test/test.component';
import { Test2Component } from './tests/test2/test2.component'

@NgModule({
  imports: [
    BrowserModule,
    ModelModule,
    CoreModule,
    MessageModule,
    routing,
    BrowserAnimationsModule
  ],
  declarations:[
    AppComponent,
    TestComponent,
    Test2Component,
  ],
  providers:[
    TermsGuard,
    LoadGuard
  ],
  bootstrap: [
   AppComponent
    ]
})
export class AppModule { }
