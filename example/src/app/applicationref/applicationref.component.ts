import { Component, OnInit, ApplicationRef } from '@angular/core';
import { Model } from '../model/repository.model';
import { Product } from '../model/product.model';

@Component({
  selector: 'applicationref',
  templateUrl: './applicationref.component.html',
  styleUrls: ['./applicationref.component.css']
})
export class ApplicationrefComponent implements OnInit {

  model: Model = new Model();

  constructor(ref: ApplicationRef) { 
    (<any>window).appRef = ref;
    (<any>window).model = this.model;
  }

  ngOnInit(): void {
  }

getProductByPosition(position: number): Product {
  return this.model.getProducts()[position];
 }

getClassesByPosition(position: number): string {
  let product = this.getProductByPosition(position);
  return "p-2 " + (product.price < 50 ? "bg-info" : "bg-warning");
}

}
