import { Component, OnInit } from '@angular/core';
import { AddVideosElementService } from '../../services/add-videos-element.service';

@Component({
  selector: 'app-async-operator',
  templateUrl: './async-operator.component.html',
  styleUrls: ['./async-operator.component.scss']
})
export class AsyncOperatorComponent implements OnInit {

  public videoEmmit: any;
  constructor(private addVideosElementService: AddVideosElementService) { }

  ngOnInit(): void {
    this.subScribeVideo();
  }


  addVideos(addVideo: any) {
    this.addVideosElementService.asyncvideoEmmit.next(addVideo)
    console.log('addVideo :>> ', addVideo);
  }

  subScribeVideo() {
    this.addVideosElementService.asyncvideoEmmit.subscribe((response) => {
      this.videoEmmit = response
      console.log('response :>> ', response);
    })
  }

  onClickCompleted() {
    this.addVideosElementService.asyncvideoEmmit.complete()
    console.log('click');
  }
}
