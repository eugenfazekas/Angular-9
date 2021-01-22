import { Component, HostListener, Output, EventEmitter } from '@angular/core';
import { Model } from 'src/app/model/model.repository';
import { Product } from 'src/app/model/product.model';


@Component({
  selector: 'first',
  templateUrl: './test.component.html'
})
export class TestComponent  {

  constructor(private repository: Model) { }

  category: string = "Soccer";
  highlighted: boolean = false;

  @Output("nx-highlight")
  change = new EventEmitter<boolean>();

  getProducts(): Product[] {
    return this.repository.getProducts()
        .filter(p => p.category == this.category);
  }

  @HostListener("mouseenter",["$event.type"])
  @HostListener("mouseleave",["$event.type"])
  setHighlight(type: string) {
    this.highlighted = type == "mouseenter"; 
    this.change.emit(this.highlighted);
  }
}
