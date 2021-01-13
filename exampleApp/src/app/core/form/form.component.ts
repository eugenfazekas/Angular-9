import { Component } from '@angular/core';
import { Model } from 'src/app/model/model.repository';
import { SharedState, MODES } from '../shared-state.model';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'nx-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  product: Product = new Product();

  constructor(private model: Model, 
              private state: SharedState) { }

      get editing(): boolean {
        return this.state.mode == MODES.EDIT;
      }    

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
}
