import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { from, map, mergeAll, mergeMap, of } from 'rxjs';
import { AddVideosElementService } from '../../services/add-videos-element.service';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.scss']
})
export class MergeMapComponent implements OnInit {

  namesList: string[] = ['Chenal-1', 'Chenal-2', 'Chenal-3', 'Chenal-4']
  constructor(private addVideosElementService: AddVideosElementService) { }

  ngOnInit(): void {
    this.subscribeMethod1();
    this.subscribeMethod2();
    this.subscribeMethod3();
  }

  getData(data: any) {
    return of(data + ' Video Uploded')
  }

  subscribeMethod1() {
    from(this.namesList).
      pipe(
        map(res => this.getData(res))
      ).
      subscribe((response) => {
        this.addVideosElementService.printElement(response, 'container1')
        // response.subscribe((response2) => {
        //   this.addVideosElementService.printElement(response2, 'container1')
        //   console.log('response2 :>> ', response2);
        // })
      })
  }

  subscribeMethod2() {
    from(this.namesList).
      pipe(
        map(res => this.getData(res)),
        mergeAll()
      ).
      subscribe((response) => {
        this.addVideosElementService.printElement(response, 'container2')
        console.log('response :>> ', response);
      })
  }

  subscribeMethod3() {
    from(this.namesList).
      pipe(
        mergeMap(res => this.getData(res))
      ).
      subscribe((response) => {
        this.addVideosElementService.printElement(response, 'container3')
        console.log('response :>> ', response);
      })
  }

}
