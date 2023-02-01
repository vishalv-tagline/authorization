import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ProductListService } from '../../services/product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public products: any = [];

  constructor(
    // private productListService: ProductListService,
    private spinner: NgxSpinnerService,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.fetchProduct();
  }

  fetchProduct() {
    // return this.productListService.getProduct().subscribe((response) => {
    //   this.products = response
    //   console.log('this.products :>> ', this.products);
    // })
    // this.spinner.show();
    console.log('this.activateRoute :>> ', this.activateRoute);
    this.products = this.activateRoute.snapshot.data['productList'].products;
    console.log('this.products :>> ', this.products);
    // this.spinner.hide();
  }

}
