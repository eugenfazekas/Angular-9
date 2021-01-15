import { Component, Inject } from '@angular/core';
import { SharedState, MODES, SHARED_STATE } from '../shared-state.model';
import { Model } from 'src/app/model/model.repository';
import { Product } from 'src/app/model/product.model';
import { Observer } from 'rxjs';

@Component({
  selector: 'nx-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent{

  constructor(private model: Model, @Inject(SHARED_STATE) public observer: Observer<SharedState>) { }

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
    this.observer.next(new SharedState(MODES.EDIT, key));
  }

  createProduct() {
    this.observer.next(new SharedState(MODES.CREATE));
  }
}
