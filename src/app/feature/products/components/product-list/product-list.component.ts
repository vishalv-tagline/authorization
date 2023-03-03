import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public products: any = [];
  public productId!: number;
  public perProduct: any;

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
    this.spinner.hide();
    // setTimeout(() => {
    //   this.spinner.hide()
    // }, 1500)
    console.log('this.activateRoute :>> ', this.activateRoute);
    this.products = this.activateRoute.snapshot.data['productList'].products;
    console.log('this.products :>> ', this.products);
  }

  sendId(productId: number) {
    console.log('productId :>> ', productId);
    this.perProduct = this.products.find((data: any,) => { return productId === data.id })
    console.log('this.perProduct :>> ', this.perProduct);
    // console.log('this.productId :>> ', this.productId);
  }
}
