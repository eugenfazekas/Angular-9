import { Component, Input, ViewChildren, QueryList } from '@angular/core';
import { Model } from 'src/app/data/repository.model';
import { Product } from 'src/app/model/product.model';
import { NxCellColor } from 'src/app/shared/cellColor.directive';

@Component({
  selector: 'app-product-table',
  templateUrl: 'product-table.component.html'
})
export class ProductTableComponent {

  @Input("model")
  dataModel: Model;

  getProduct(key: number){
    return this.dataModel.getProduct(key);
  }

  getProducts(): Product[] {
    return this.dataModel.getProducts();
  }

  deleteProduct(key: number) {
    return this.dataModel.deleteProduct(key);
  }

  showTable: boolean = true;

  @ViewChildren(NxCellColor)
  viewChildren: QueryList<NxCellColor>;

  ngAfterViewInit() {
    this.viewChildren.changes.subscribe( () => {
      this.updateViewChildren();
    })
  }

  private updateViewChildren() {
    setTimeout ( () => {
      this.viewChildren.forEach( (child,index) => {
        child.setColor(index % 2 ? true : false);
      })
    },0)
  }
}
