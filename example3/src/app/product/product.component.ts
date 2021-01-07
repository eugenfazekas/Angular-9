import { Component, OnInit, ApplicationRef } from '@angular/core';
import { Product } from '../model/product.model';
import { Model } from '../data/repository.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  model: Model = new Model();
  
  targetName: string = "Kayak";

  constructor(ref: ApplicationRef) {
      (<any>window).appRef = ref;
      (<any>window).model = this.model;
  }

  getProductByPosition(position: number): Product {
      return this.model.getProducts()[position];
  }

  getProduct(key: number): Product {
      return this.model.getProduct(key);
  }

  getProducts(): Product[] {
      return this.model.getProducts();
  }

  getProductCount(): number {
      return this.getProducts().length;
  }

  getKey(index: number, product: Product){
      return product.id;
  }

  counter: number = 1;

  getProductPrice(index: number): number {
      return Math.floor(this.getProduct(index).price);
  }

}
