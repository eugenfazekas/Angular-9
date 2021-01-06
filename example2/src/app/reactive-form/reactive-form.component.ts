import { Component } from '@angular/core';
import { Model } from '../data/repository.model';
import { ProductFormGroup } from '../model/reactive-form.model';
import { Product } from '../model/product.model';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent  {

  model: Model = new Model();

  formGroup: ProductFormGroup = new ProductFormGroup();

  getProduct(key: number): Product {
    return this.model.getProduct(key);
}

getProducts(): Product[] {
    return this.model.getProducts();
}

newProduct: Product = new Product();

get jsonProduct() {
    return JSON.stringify(this.newProduct);
}

addProduct(p: Product) {
    console.log("New Product: " + this.jsonProduct);
}

formSubmitted: boolean = false;

submitForm() {
    Object.keys(this.formGroup.controls)
        .forEach(c => this.newProduct[c] = this.formGroup.controls[c].value);
    this.formSubmitted = true;
    if (this.formGroup.valid) {
        this.addProduct(this.newProduct);
        this.newProduct = new Product();
        this.formGroup.reset();
        this.formSubmitted = false;
    }
} 

}
