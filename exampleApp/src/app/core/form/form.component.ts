import { Component, Inject } from '@angular/core';
import { Model } from 'src/app/model/model.repository';
import { SharedState, MODES, SHARED_STATE } from '../shared-state.model';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/model/product.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'nx-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  product: Product = new Product();
  //lastId: number;

  constructor(private model: Model, 
              @Inject(SHARED_STATE) public stateEvents: Observable<SharedState>) { 
                  stateEvents.subscribe((update) => {
                    this.product = new Product();
                    if(update.id != undefined) {
                      Object.assign(this.product, this.model.getProduct(update.id));
                    }
                    this.editing = update.mode == MODES.EDIT;
                  })
              }

     editing: boolean = false;    

    submitForm(form: NgForm) {
      if(form.valid) {
        this.model.saveProduct(this.product);
        this.product = new Product();
        form.reset;
      }
    }

    resetForm() {
      this.product = new Product();
    }

    // ngDoCheck() {
    //   if (this.lastId != this.state.id) {
    //         this.product = new Product();
    //         if (this.state.mode == MODES.EDIT) {
    //           Object.assign(this.product, this.model.getProduct(this.state.id));
    //         }
    //         this.lastId = this.state.id
    //     }
    // }

}
