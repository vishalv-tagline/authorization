import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { concatMap, debounceTime, delay, distinctUntilChanged, filter, from, map, of, pluck, switchAll, switchMap } from 'rxjs';
import { Videoslist } from '../../interface/common';
import { AddVideosElementService } from '../../services/add-videos-element.service';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent implements OnInit, AfterViewInit {
  public namesList: string[] = ['Chenal-1', 'Chenal-2', 'Chenal-3', 'Chenal-4']
  public apiData: any;
  public searchCount: any;
  @ViewChild('searchData') searchData!: NgForm;

  constructor(private addVideosElementService: AddVideosElementService) { }


  getData(data: any) {
    return of(data + ' Video Uploded').pipe(delay(1000))
  }

  ngOnInit(): void {
    // this.addVideosElementService.fetchUxData('rxjs').subscribe((res) => {
    //   console.log('res :>> ', res);
    // })
    this.subscribeMethod1();
    this.subscribeMethod2();
    this.subscribeMethod3();
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
        switchAll()
      ).
      subscribe((response) => {
        this.addVideosElementService.printElement(response, 'container2')
        console.log('response :>> ', response);
      })
  }

  subscribeMethod3() {
    from(this.namesList).
      pipe(
        switchMap(res => this.getData(res))
      ).
      subscribe((response) => {
        this.addVideosElementService.printElement(response, 'container3')
        console.log('response :>> ', response);
      })
  }

  ngAfterViewInit(): void {
    const formValue = this.searchData.valueChanges;
    formValue?.pipe(
      filter(() => this.searchData.valid!),
      pluck('search'),
      debounceTime(500),
      distinctUntilChanged(),
      concatMap((res) => this.addVideosElementService.fetchUxData(res))
    )
      ?.subscribe((res) => {
        this.apiData = res
        this.searchCount = Object.keys(res).length;
        console.log('res :>> ', res);
      })
  }



}
