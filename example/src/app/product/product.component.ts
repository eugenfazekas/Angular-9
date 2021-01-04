import { Component, OnInit } from '@angular/core';
import { Model } from '../model/repository.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  model : Model = new Model();

  getClasses1(): string {
    return this.model.getProducts().length == 5 ? "bg-success" : "bg-warning";
  }

  getClasses2(key: number): string {
    let product = this.model.getProduct(key);
    return "p-2 " + (product.price < 50 ? "bg-info":"bg-warning");
  }

  getClassMap(key: number):Object {
    let product = this.model.getProduct(key);
    return {
      "text-center bg-danger" : product.name == "Kayak",
      "bg-info" : product.price < 50
    };
  }

  fontSizeWithUnits: string = "30px";
  fontSizeWithoutUnits: string = "30";


  getStyles(key: number){
    let product = this.model.getProduct(key);
    return {
      fontSize: "30px",
      "margin.px": "100",
      color: product.price > 50 ? "red" : "green"
    };
  }
  
}
