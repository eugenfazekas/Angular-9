import { Component, Inject } from '@angular/core';
import { Model } from 'src/app/model/model.repository';
import { SharedState, MODES, SHARED_STATE } from '../shared-state.model';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/model/product.model';
import { Observable } from 'rxjs';
import { skipWhile, distinctUntilChanged } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'nx-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  product: Product = new Product();
  originalProduct: Product = new Product();
  //lastId: number;

  constructor(public model: Model, activateRoute: ActivatedRoute, private router: Router) {
    
    activateRoute.params.subscribe(params => {
        this.editing = params["mode"] == "edit";
        let id = params["id"];

          if(id != null) {
            Object.assign(this.product, model.getProduct(id) || new Product());
            Object.assign(this.originalProduct, this.product);
          }
        /*
        if(id != null) {
          let name = activateRoute.snapshot.params["name"];
          let category = activateRoute.snapshot.params["category"];
          let price = activateRoute.snapshot.params["price"];

          if(name != null && category != null && price) {
              this.product.id = id;
              this.product.name = name;
              this.product.category = category;
              this.product.price = price;
            } else {
          Object.assign(this.product, model.getProduct(id) || new Product());
            }
            
        }*/
      })
  }

  /*
  constructor(private model: Model, 
              @Inject(SHARED_STATE) public stateEvents: Observable<SharedState>) { 

                stateEvents
                // .pipe(skipWhile(state => state.mode == MODES.EDIT))
                // .pipe(distinctUntilChanged((firstState, secondState) =>
                //     firstState.mode == secondState.mode 
                //         && firstState.id == secondState.id))
                .subscribe(update => {
                    this.product = new Product();
                    if (update.id != undefined) {
                        Object.assign(this.product, this.model.getProduct(update.id));
                    }
                    this.editing = update.mode == MODES.EDIT;     
                });
        }
*/
     editing: boolean = false;    

    submitForm(form: NgForm) {
      if(form.valid) {
        this.model.saveProduct(this.product);
        this.originalProduct = this.product;
        //this.product = new Product();
        //form.reset();
        this.router.navigateByUrl("/")
      }
    }
/*
    resetForm() {
      this.product = new Product();
    }
*/
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
