import { Component } from '@angular/core';
import { SharedState, MODES } from '../shared-state.model';
import { Model } from 'src/app/model/model.repository';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'nx-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent{

  constructor(private model: Model, private state: SharedState) { }

  getProduct(key: number) {
    return this.model.getProduct(key);
  }

  getProducts(): Product[] {
     return this.model.getProducts();
  }

  deleteProduct(key: number) {
     return this.model.deleteProduct(key);
  }

  editProduct(key: number) {
    this.state.id = key;
    this.state.mode = MODES.EDIT;
  }

  createProduct() {
    this.state.id = undefined;
    this.state.mode = MODES.CREATE;
  }
}
