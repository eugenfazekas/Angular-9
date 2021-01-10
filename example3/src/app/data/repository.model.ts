import { Product } from "../model/product.model";
import { SimpleDataSource } from "./datasource.model";

export class Model {
    private dataSource: SimpleDataSource;
    private products: Product[];
    //private lastItemId:number
    private locator = (p: Product, id: number) => p.id == id;

    constructor() {
        this.dataSource = new SimpleDataSource();
        this.products = new Array<Product>();
        this.dataSource.getData().forEach(p => this.products.push(p));
        //this.lastItemId = this.products[this.products.length -1].id+1;
    }

    getProducts(): Product[] {
        return this.products;
    }

    getProduct(id: number): Product {
        return this.products.find(p => this.locator(p, id));
    }

    getProductList(){
        let items = this.products;
            for (let i = 0; i < items.length; i++) {
           console.log('I:',i,'item:', JSON.stringify(items[i]));
       }
    }

    getLastProductItemId(){
        let lastId = this.products[this.products.length -1].id+1;
        return lastId;
    }

    saveProduct(product: Product) {
       product.id = this.getLastProductItemId();
        this.products.push(product);
    }

    deleteProduct(id: number) {
        let index = this.products.findIndex(p => this.locator(p, id));
        if (index > -1) {
            this.products.splice(index, 1);
        }
    }

    private generateID(): number {
        let candidate = 100;
        while (this.getProduct(candidate) != null) {
            candidate++;
        }
        return candidate;
    }

    swapProduct() {
        let p = this.products.shift();
        this.products.push(new Product(p.id,p.name,p.category,p.price));
    }

}
