import { Component, OnInit } from '@angular/core';
import { RestDataSource } from 'src/app/model/rest.datasource';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  _category: string = 'Soccer';
  _products: Product[] = [];
  highlighted: boolean = false;

  constructor(public dataSource: RestDataSource) { }

  
  ngOnInit(): void {
    this.updateData();
  }

  getProducts(): Product[] {
   return this._products;
  }

  set category(newValue: string) {
    this._category;
    this.updateData();
  }

  updateData() {
    this.dataSource.getData().subscribe(data => this._products = data.filter(
      p => p.category == this._category));
  }

}
