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

@NgModule({
    imports: [BrowserModule, FormsModule, ModelModule, MessageModule ],
    declarations: [TableComponent, FormComponent, StatePipe],
    exports: [ModelModule, TableComponent, FormComponent],
    providers: [{
        provide: SHARED_STATE,
        deps: [MessageService, Model],
        useFactory: (messageService, model) => {
            let subject = new Subject<SharedState>();
            subject.subscribe(m => messageService.reportMessage(
                    new Message(MODES[m.mode] + (m.id != undefined
                        ? ` ${model.getProduct(m.id).name}` : "")))
                );
            return subject;       
        }
    }]
})
export class CoreModule { }