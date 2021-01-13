import { Pipe } from '@angular/core';

@Pipe({
    name:"addTax"
})

export class NxAddTaxPipe {

    dafaultRate: number = 10;

    transform(value: any, rate?: any): number {
        let valueNumber = Number.parseFloat(value);
        let rateNumber = rate == undefined ? this.dafaultRate : Number.parseInt(rate);
        return valueNumber + (valueNumber * (rateNumber / 100));
    }
}
