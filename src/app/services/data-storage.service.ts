import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError } from "rxjs/operators";
import { Product } from "../model/Product";
import { ProductService } from "./product.service";

@Injectable()
export class DataStorageService {
    products: Product[];
    constructor (private http : HttpClient, private productService : ProductService)
    {

    }

    storeProducts(){
        const products= this.productService.getProducts();
        return this.http
        .put('https://ng-productapp-default-rtdb.firebaseio.com/products.json', products);
        
    }

    fetchProduct()
    {
        return this.http.get('https://ng-productapp-default-rtdb.firebaseio.com/products.json')
        .subscribe(products => 
            {
                console.log(products)
            });

    }
}