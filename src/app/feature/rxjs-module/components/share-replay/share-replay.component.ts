import { Component, OnInit } from '@angular/core';
import { filter, map, toArray } from 'rxjs';
import { AddVideosElementService } from '../../services/add-videos-element.service';

@Component({
  selector: 'app-share-replay',
  templateUrl: './share-replay.component.html',
  styleUrls: ['./share-replay.component.scss']
})
export class ShareReplayComponent implements OnInit {
  public products: any = [];
  public smartPhones: any = [];
  public laptops: any = [];
  constructor(private addVideosElementService: AddVideosElementService) { }

  ngOnInit(): void {
    this.fetchProducts();
    // this.fetchSmartPhone()
  }

  fetchProducts() {
    const allProduct = this.addVideosElementService.fetchProduct()
    allProduct.subscribe((res) => {
      this.products = res
      // console.log('res :>> ', res);
    })


  }

}
