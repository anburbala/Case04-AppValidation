import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product';
import { map} from 'rxjs/operators';
 
@Component({
  templateUrl: "product.component.html",
})


export class ProductComponent
{
  products : Product[] = [];
  filteredProduct = '';
  filteredStatus = '';
   constructor(private productService: ProductService){
   }

   ngOnInit() {
      this.readAllProducts();
    }

    readAllProducts()
    {
      this.products=[];
      this.productService.getProducts()
      .pipe(
        map(
          resp => {
            const postArray = [];
            for(const key in resp)
            {
              postArray.push({...resp[key], id:key})
            }
            return postArray;
          }
        )
      )
      .subscribe((resp:any) => {
            (error: any) => console.log(error);
            if(resp.length > 0)
            {
              for (const data of resp) {
                  this.products.push(data);
              }
            }
            console.log(this.products);
          });
    }
  
    deleteAllProducts()
    {
      this.productService.deleteAllProducts()
        .subscribe(
          response => {
              console.log(response);
          },
          error => {
            console.log(error);
      });
      this.products=[];
    }
}

 