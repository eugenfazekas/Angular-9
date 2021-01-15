import { NgModule } from '@angular/core';
import { SharedState, SHARED_STATE } from './shared-state.model';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ModelModule } from '../model/model.module';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { Subject } from 'rxjs';
import { StatePipe } from './state.pipe';


@NgModule({
        imports: [
            BrowserModule,
            FormsModule,
            ModelModule
        ],
        declarations: [
            TableComponent,
            FormComponent,
            StatePipe
        ],
        providers:[
            {provide: SHARED_STATE, useValue: new Subject<SharedState>()}
        ], 
        exports:[
            TableComponent,
            FormComponent,
            ModelModule
        ]
})
export class CoreModule { }