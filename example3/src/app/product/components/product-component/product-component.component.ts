import { Component, OnInit } from '@angular/core';
import { Model } from '../../shared/repository.model';
import { Product } from '../../model/product.model';


@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  //styles: ['/deep/ div { border: 2px black solid; font-style:italic}']
})
export class ProductComponent {

  //model: Model = new Model();

  constructor(public model: Model){}

  addProduct(p: Product) {
     this.model.saveProduct(p);
}
}
