import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { AddVideosElementService } from '../../services/add-videos-element.service';

@Component({
  selector: 'app-interval-and-timer',
  templateUrl: './interval-and-timer.component.html',
  styleUrls: ['./interval-and-timer.component.scss']
})
export class IntervalAndTimerComponent implements OnInit {

  public videoSubscription!: Subscription
  public addVideo: any;

  constructor(private addVideosElementService: AddVideosElementService) { }

  ngOnInit(): void {
    // let broadCastVideo = interval(1000)
    let broadCastVideo = timer(2000, 1000)

    this.videoSubscription = broadCastVideo.subscribe((res) => {
      console.log('res :>> ', res);
      this.addVideo = 'Video ' + res
      this.addVideosElementService.printElement(this.addVideo, 'eleContainer')

      if (res >= 5) {
        this.videoSubscription.unsubscribe()
      }
    })
  }

}
