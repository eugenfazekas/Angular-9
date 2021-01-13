import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { AppComponent } from './app.component';
import { TableComponent } from './core/table/table.component';
import { FormComponent } from './core/form/form.component';
import { MessageComponent } from './messages/message/message.component';
import { ModelModule } from './model/model.module';
import { CoreModule } from './core/core.module';
import { MessageModule } from './messages/core.module';

@NgModule({
  imports: [
    BrowserModule,
    ModelModule,
    CoreModule,
    MessageModule
  ],
  bootstrap: [
    TableComponent,
    FormComponent,
    MessageComponent
    ]
})
export class AppModule { }
