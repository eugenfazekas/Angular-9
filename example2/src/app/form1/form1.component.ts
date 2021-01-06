import { Component } from '@angular/core';
import { Product } from '../model/product.model';
import { Model } from '../data/repository.model';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component  {

  model: Model = new Model();

  selectedProduct1: string;

  selectedProduct2: string;

  selectedProduct3: string;

  getProduct(key: number): Product {
    return this.model.getProduct(key);
  }

  getProducts(): Product[] {
      return this.model.getProducts();
  }

  getSelected(product: Product): boolean {
    return product.name == this.selectedProduct1;
  }

}
