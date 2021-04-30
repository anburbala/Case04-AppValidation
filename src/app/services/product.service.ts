import {Product} from '../model/Product'
import { of, Observable, throwError} from 'rxjs';
 
export class ProductService{
 
    products: Product[];
    
    public constructor() {
        this.products=[
            new Product(1000,'Memory Card',500),
            new Product(2000,'Pen Drive',750),
            new Product(3000,'Power Bank',100),
            new Product(4000,'Computer',100),
            new Product(5000,'Laptop',100),
            new Product(6000,'Printer',100),
        ]
    }
 
    public getProducts(): Observable<Product[]> {
        return of(this.products) ;
    }
 
    public getProduct(id: number): Observable<Product> {
        var Product= this.products.find(i => i.productID==id)
        return of(Product) ;
    }
 
}