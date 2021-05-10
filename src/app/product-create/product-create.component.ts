import { Component, OnInit } from '@angular/core';
import { Product } from '../model/Product';
import { ProductService } from '../services/product.service';
import { Subject } from 'rxjs';
import { map} from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})

export class ProductCreateComponent implements OnInit {

  private readProducts : Product[] = [];

  error = new Subject<string>();

  product = {
    productId: '',
    name: '',
    price: '',
    desc: '',
    available:false,
  };
  submitted = false;

  constructor(private productService: ProductService) { }
  
  ngOnInit(): void {

  }

  createProduct() {

   let product : Product= {
    productId : this.product.productId,
    name: this.product.name,
    price : this.product.price,
    desc: this.product.desc
   };

    this.productService.create(product)
      .subscribe(
          response => {
              this.submitted = true;
          },
          error => {
            this.error.next(error);
      });
  }

}