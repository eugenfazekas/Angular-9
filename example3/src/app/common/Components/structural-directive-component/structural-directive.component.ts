import { Component } from '@angular/core';
import { Model } from '../../../product/shared/repository.model';
import { ProductFormGroup } from '../../utils/reactive-form.model';
import { Product } from '../.././../product/model/product.model';

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.css']
})
export class StructuralDirectiveComponent {

  // model: Model = new Model();
  formGroup: ProductFormGroup = new ProductFormGroup();
  showTable: boolean = false;
  darkColor: boolean = false;

  constructor(public model: Model){}

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

deleteProduct(key: number) {
    this.model.deleteProduct(key);
}

getProductsList(){
  this.model.getProductList();
}

submitForm() {
    this.addProduct(this.newProduct);
    this.newProduct = new Product();
 }

}
