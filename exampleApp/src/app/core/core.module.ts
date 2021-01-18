import { NgModule } from '@angular/core';
import { SharedState, SHARED_STATE, MODES } from './shared-state.model';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ModelModule } from '../model/model.module';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { Subject } from 'rxjs';
import { StatePipe } from './state.pipe';
import { MessageService } from '../messages/message.service';
import { Model } from '../model/model.repository';
import { Message } from '../messages/message.model';
import { MessageModule } from '../messages/message.module';
import { RouterModule } from '@angular/router';
import { ProductCountComponent } from './product-count/product-count.component';
import { CategoryCountComponent } from './category-count/category-count.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UnsavedGuard } from './unsaved.guard';

@NgModule({
    imports: [BrowserModule, FormsModule, ModelModule, MessageModule, RouterModule],
    declarations: [TableComponent, FormComponent, StatePipe, ProductCountComponent, CategoryCountComponent, NotFoundComponent],
    exports: [ModelModule, TableComponent, FormComponent],
    
    providers: [UnsavedGuard
        /*{
        provide: SHARED_STATE,
        deps: [MessageService, Model],
        useFactory: (messageService, model) => {
            return new Subject<SharedState>();
             let subject = new Subject<SharedState>();
             subject.subscribe(m => messageService.reportMessage(
                  new Message(MODES[m.mode] + (m.id != undefined
                         ? ` ${model.getProduct(m.id).name}` : "")))
                 );
             return subject;       
        }
     }*/
    ]
})
export class CoreModule { }