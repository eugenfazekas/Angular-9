import { NgModule } from '@angular/core';
import { SharedState } from './shared-state.model';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ModelModule } from '../model/model.module';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';


@NgModule({
        imports: [
            BrowserModule,
            FormsModule,
            ModelModule
        ],
        declarations: [
            TableComponent,
            FormComponent
        ],
        providers:[
            SharedState
        ], 
        exports:[
            TableComponent,
            FormComponent,
            ModelModule
        ]
})
export class CoreModule { }