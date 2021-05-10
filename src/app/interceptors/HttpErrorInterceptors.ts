import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError,Observable } from "rxjs";
import {tap,catchError} from 'rxjs/Operators';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(request)
        .pipe(
          tap((data: any) => console.log(data)),
          catchError((error: HttpErrorResponse) => {
            if (error.error instanceof ErrorEvent) {
              // A client-side or network error occurred. Handle it accordingly.
              console.error("An error occurred:",error.error.message);
            } else {
              // The backend returned an unsuccessful response code.
              // The response body may contain clues as to what went wrong,
              console.error(
                "Backend returned code :" + error.status,
                "Error Message: " + error.message);
            }
            // return an observable with a user-facing error message
            return throwError(
              "Something bad happened; please try again later.");
          })
        );
    }
  }


