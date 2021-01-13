import { Pipe } from '@angular/core';
import { Product } from '../model/product.model';

@Pipe({
    name: "filter",
    pure: false
})

export class NxCategoryFilterPipe {

    transform(products: Product[],category: string): Product[] {
        return category == 'All Categories' ? products : products.filter(p => p.category == category);
       
    }
}