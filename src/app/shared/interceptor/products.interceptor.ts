import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductsInterceptor implements HttpInterceptor {
  public token: string = "iouguygiugbiubgbguyfbgrtdftyggh67tghg564bgiuyg675r456buyghugnuygtygabc";
  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders: {
        'token': this.token
      }
    })
    return next.handle(request);
  }
}
