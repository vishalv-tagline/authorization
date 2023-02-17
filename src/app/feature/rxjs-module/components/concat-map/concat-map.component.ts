import { Component, OnInit } from '@angular/core';
import { concatAll, concatMap, delay, from, map, of } from 'rxjs';
import { AddVideosElementService } from '../../services/add-videos-element.service';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.scss']
})
export class ConcatMapComponent implements OnInit {

  namesList: string[] = ['Chenal-1', 'Chenal-2', 'Chenal-3', 'Chenal-4']

  constructor(private addVideosElementService: AddVideosElementService) { }

  getData(data: any) {
    return of(data + ' Video Uploded').pipe(delay(1500))
  }

  ngOnInit(): void {
    this.subscribeMethod1();
    this.subscribeMethod2();
    this.subscribeMethod3()
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
        concatAll()
      ).
      subscribe((response) => {
        this.addVideosElementService.printElement(response, 'container2')
        console.log('response :>> ', response);
      })
  }

  subscribeMethod3() {
    from(this.namesList).
      pipe(
        concatMap(res => this.getData(res))
      ).
      subscribe((response) => {
        this.addVideosElementService.printElement(response, 'container3')
        console.log('response :>> ', response);
      })
  }
}
