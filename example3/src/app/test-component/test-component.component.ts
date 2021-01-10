import { Component, OnInit } from '@angular/core';
import { Model } from '../data/repository.model';
import { Product } from '../model/product.model';


@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styles: ['/deep/ div { border: 2px black solid; font-style:italic}']
})
export class TestComponentComponent {

  model: Model = new Model();

  addProduct(p: Product) {
     this.model.saveProduct(p);
}
}
