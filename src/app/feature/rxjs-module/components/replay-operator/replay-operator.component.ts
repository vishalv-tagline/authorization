import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { AddVideosElementService } from '../../services/add-videos-element.service';

@Component({
  selector: 'app-replay-operator',
  templateUrl: './replay-operator.component.html',
  styleUrls: ['./replay-operator.component.scss']
})
export class ReplayOperatorComponent implements OnInit {

  listData1: string[] = ['Angular', 'Reactjs', 'Javascript', 'Typescript', 'Html']
  listData2: string[] = []
  listData3: string[] = []

  subscriptionMode1: boolean = false;
  subscriptionMode2: boolean = false;
  methodInterval: boolean = false;

  subscription1!: Subscription;
  subscription2!: Subscription;
  intvalSub!: Subscription;

  constructor(private addVideosElementService: AddVideosElementService) { }

  ngOnInit(): void {
    this.subscribeVideo();
  }

  addVideo(videoAdd: any) {
    this.addVideosElementService.videoEmmit.next(videoAdd);
  }

  subscribeVideo() {
    this.addVideosElementService.videoEmmit.subscribe((response) => {
      this.listData1.push(response);
      console.log('response :>> ', response);
    })
  }

  subscribeUser1() {
    if (this.subscriptionMode1) {
      this.subscription1.unsubscribe();
    }
    else {
      this.subscription1 = this.addVideosElementService.videoEmmit.subscribe((response) => {
        this.listData2.push(response)
      })
    }
    this.subscriptionMode1 = !this.subscriptionMode1;
  }

  subscribeUser2() {
    if (this.subscriptionMode2) {
      this.subscription2.unsubscribe();
    }
    else {
      this.subscription2 = this.addVideosElementService.videoEmmit.subscribe((response) => {
        this.listData3.push(response)
      })
    }
    this.subscriptionMode2 = !this.subscriptionMode2;
  }

  toggleMethod() {

    const broadCastViodeo = interval(1000);
    if (!this.methodInterval) {
      this.intvalSub = broadCastViodeo.subscribe((response) => {
        this.addVideosElementService.videoEmmit.next('Video ' + response)
        console.log('response :>> ', response);
      })
    }
    else {
      this.intvalSub.unsubscribe();
    }
    this.methodInterval = !this.methodInterval;
  }

}
