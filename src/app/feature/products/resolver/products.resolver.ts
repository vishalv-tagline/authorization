import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  ActivatedRoute
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProductListService } from '../services/product-list.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsResolver implements Resolve<boolean> {

  constructor(private productListService: ProductListService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.productListService.getProduct();
  }
}
