import { Component, Input, ViewChildren, QueryList } from '@angular/core';
import { Model } from 'src/app/product/shared/repository.model';
import { Product } from 'src/app/product/model/product.model';
import { NxCellColor } from 'src/app/common/Directives/cellColor.directive';

@Component({
  selector: 'app-product-table',
  templateUrl: 'product-table.component.html'
})
export class ProductTableComponent {

  showTable: boolean = true;

  @Input("model")
  dataModel: Model;

  getProduct(key: number){
    return this.dataModel.getProduct(key);
  }

  getProducts(): Product[] {
    return this.dataModel.getProducts();
  }

  getCategories() {
    return this.dataModel.getCategories();
  }

  deleteProduct(key: number) {
    return this.dataModel.deleteProduct(key);
  }

  taxRate: number = 0;
  categoryFilter: string = 'All Categories';
  itemCount: number = 5;

  dateObject: Date = new Date(2020,1,20);
  dateString: string = '2020-02-20T00:00:00.000Z';
  dateNumber: number = 1582156800000;

  selectMap = {
    "Watersports": "stay dry",
    "Soccer":"score goals",
    "other":"have fun"
  }

  numberMap = {
    "=1":"one product",
    "=2":"two products",
    "other":"# products"
  }
/*
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
  */
}
