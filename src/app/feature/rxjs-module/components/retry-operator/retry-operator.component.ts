import { Component, OnInit } from '@angular/core';
import { delay, retry, retryWhen, scan } from 'rxjs';
import { AddVideosElementService } from '../../services/add-videos-element.service';

@Component({
  selector: 'app-retry-operator',
  templateUrl: './retry-operator.component.html',
  styleUrls: ['./retry-operator.component.scss']
})
export class RetryOperatorComponent implements OnInit {

  productsDatas: any = [];
  fetching: boolean = false;
  dataFetching: string = 'No Data';

  constructor(private addVideosElementService: AddVideosElementService) { }

  ngOnInit(): void {

  }

  getDatas() {
    this.fetching = true;
    this.addVideosElementService.fetchData().pipe(
      // retry(2)
      retryWhen((err) => err.pipe(
        delay(1000),
        scan((retyrCount) => {
          if (retyrCount >= 5) {
            throw err;
          }
          else {
            retyrCount = retyrCount + 1;
            this.dataFetching = "Retrying Attempt # " + retyrCount
            return retyrCount
          }
        }, 0)
      ))
    ).subscribe((res) => {
      this.productsDatas = res
      this.dataFetching = 'Data Fetched'
      this.fetching = false;
      console.log('this.productsData :>> ', this.productsDatas.users);
    },
      (err) => {
        console.log('err :>> ', err);
        this.dataFetching = 'Problem Feting Data...'
        this.fetching = false;
      }
    )
  }

}
