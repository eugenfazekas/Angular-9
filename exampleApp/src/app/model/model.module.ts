import { NgModule } from '@angular/core';
//import { StaticDataSource } from './static.datasource';
import { Model } from './model.repository';
import { HttpClientModule } from '@angular/common/http'
import { RestDataSource, REST_URL } from './rest.datasource';

@NgModule({
  providers:[
      Model,
      RestDataSource,
      { provide: REST_URL, useValue: `http://${location.hostname}:3500/products` }
    ],  
  declarations: [],
  imports: [
    HttpClientModule
  ]
})
export class ModelModule { }