import {Product } from '../model/Product';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { of, Observable, Subject} from 'rxjs';
import { Injectable } from '@angular/core';
import { map, catchError, retry } from 'rxjs/operators';

const LOCALURL='assets/data/productsdata.json';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/xml',
    })
  };
 
@Injectable()
export class ProductService{
    error = new Subject<string>();
    localUrl = LOCALURL; 
 
    constructor(private http: HttpClient) {}

    // Get Method
      getProducts() : Observable<Product[]> {
        return this.http
        .get<Product[]>('https://ng-productapp-default-rtdb.firebaseio.com/products.json')
        .pipe(
          retry(1),catchError(this.handleError<Product[]>('getProducts', [])));
      }

      //Store Products method (Using PUT / POST method)
      create(product : Product): Observable<Product[]> {
        console.log(product);
        return this.http.post<Product[]>('https://ng-productapp-default-rtdb.firebaseio.com/products.json',product)
        .pipe(
          catchError(this.handleError<Product[]>('create', [])));
        
      }

      //Delete method
      deleteAllProducts() : Observable<Product[]>
      {
        return this.http.delete<Product[]>('https://ng-productapp-default-rtdb.firebaseio.com/products.json')
        .pipe(catchError(this.handleError<Product[]>('deleteAllProducts',[])));
      }
       

      private handleError<T>(operation = 'operation', result?: T) {
          return (error: any): Observable<T> => {
            console.error(error);
            this.log(operation + " failed :"+ error.message);
            return of(result as T);
          };
        }

      private log(message: string) {
          console.log(message);
        }
      
 
}

