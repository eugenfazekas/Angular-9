import { Component, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Product } from 'src/app/product/model/product.model';

@Component({
  selector: 'app-product-form',
  templateUrl: 'product-form.component.html',
  //styleUrls: ['product-form.component.css'],
  //encapsulation: ViewEncapsulation.Emulated
})
export class ProductFormComponent {

  newProduct: Product = new Product();
  
  @Output('nxNewProduct')
  newProductEvent = new EventEmitter<Product>();

  submitForm(form: any){
    this.newProductEvent.emit(this.newProduct);
    this.newProduct = new Product();
    form.reset();
  }
}
