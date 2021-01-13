import { Pipe,Injectable } from '@angular/core';
import { DiscountService } from '../shared/discount-service';

@Pipe({
    name: "discount",
    pure: false
})
export class NxDiscountPipe {

    constructor(private discountService: DiscountService){}

    transform(price: number): number {
        return this.discountService.applyDiscount(price);
    }

}
