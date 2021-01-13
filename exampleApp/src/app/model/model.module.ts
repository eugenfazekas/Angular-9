import { NgModule } from '@angular/core';
import { StaticDataSource } from './static.datasource';
import { Model } from './model.repository';

@NgModule({
  providers:[
      StaticDataSource,
      Model
    ],  
  declarations: [],
  imports: []
})
export class ModelModule { }