import { Directive, ElementRef, Attribute, Input, Output, SimpleChange, EventEmitter, HostListener, HostBinding } from '@angular/core';
import { Product } from '../model/product.model';

@Directive({
    selector: "[nx-attr]"
})

export class NxAttributeDirective {

    /*constructor(private element: ElementRef) {
        this.element.nativeElement.addEventListener("click", () ) => {
            if(this.product != null) {
                this.click.emit(this.product.category);
            }
        });
    }*/

    @Input("nx-attr")
    @HostBinding("class")
    bgClass: string;

    @Input("nx-product")
    product: Product;
    
    @Output("nx-category")
    click = new EventEmitter<string>();

    @HostListener("click")
    triggerCustomEvent() {
        if(this.product != null) {
            this.click.emit(this.product.category);
        }
    }
    /*
     ngOnInit() {
         this.element.nativeElement.classList.add(this.bgClass || "bg-success" , "text-white");
     }
*/
/*
     ngOnChanges(changes: {[property: string]: SimpleChange}) {
         let change = changes["bgClass"];
         let classList = this.element.nativeElement.classList;
            if(!change.isFirstChange() && classList.contains(change.previousValue)){
                classList.remove(change.previousValue);
           }
           if(!classList.contains(change.currentValue)){
                 classList.add(change.currentValue);
             }

     }
*/

}
