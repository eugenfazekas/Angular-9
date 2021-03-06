import { Component } from '@angular/core';
import { Model } from '../../../product/shared/repository.model';
import { ProductFormGroup } from '../../utils/reactive-form.model';
import { Product } from '../.././../product/model/product.model';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent  {

  //model: Model = new Model();

  constructor(public model: Model){}

  formGroup: ProductFormGroup = new ProductFormGroup();

  getProduct(key: number): Product {
    return this.model.getProduct(key);
  }

  getProducts(): Product[] {
        return this.model.getProducts();
  }

  newProduct: Product = new Product();

  addProduct(p: Product) {
       this.model.saveProduct(p);
    }

   formSubmitted: boolean = false;

   submitForm() {
     this.addProduct(this.newProduct);
        }
    } 


