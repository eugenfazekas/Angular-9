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

@NgModule({
  imports: [
    BrowserModule,
    ModelModule,
    CoreModule,
    MessageModule,
    routing
  ],
  declarations:[
    AppComponent
  ],
  bootstrap: [
   AppComponent
    ]
})
export class AppModule { }
