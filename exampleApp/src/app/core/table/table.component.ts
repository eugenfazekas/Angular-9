import { Component, Inject } from '@angular/core';
import { SharedState, MODES, SHARED_STATE } from '../shared-state.model';
import { Model } from 'src/app/model/model.repository';
import { Product } from 'src/app/model/product.model';
import { Observer } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { HighlightTrigger } from '../table.animations';

@Component({
  selector: 'nx-table',
  templateUrl: './table.component.html',
  animations: [ HighlightTrigger ]
})
export class TableComponent{

  category: string = null;
  highlightCategory = "";

  constructor(private model: Model, activeRoute: ActivatedRoute
    /* @Inject(SHARED_STATE) public observer: Observer<SharedState>*/) { 
      activeRoute.params.subscribe(params => {
        this.category = params["category"] || null;
      })
    }

  getProduct(key: number) {
    return this.model.getProduct(key);
  }

  getProducts(): Product[] {
    return this.model.getProducts()
        .filter(p => this.category == null || p.category == this.category);
  }

  get categories(): string[] {
      return this.model.getProducts()
          .map(p => p.category)
          .filter((category, index, array) => array.indexOf(category) == index);
  }

  deleteProduct(key: number) {
     return this.model.deleteProduct(key);
  }

  getRowState(category: string) {
    return this.highlightCategory == ""  ?  "" : this.highlightCategory == category ? "selected" : "notselected";
  }

  /*
  editProduct(key: number) {
    this.observer.next(new SharedState(MODES.EDIT, key));
  }

  createProduct() {
    this.observer.next(new SharedState(MODES.CREATE));
  }
  */
}
