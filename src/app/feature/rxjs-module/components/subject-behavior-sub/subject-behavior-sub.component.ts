import { Component, OnDestroy, OnInit } from '@angular/core';
import { AddVideosElementService } from '../../services/add-videos-element.service';

@Component({
  selector: 'app-subject-behavior-sub',
  templateUrl: './subject-behavior-sub.component.html',
  styleUrls: ['./subject-behavior-sub.component.scss']
})
export class SubjectBehaviorSubComponent implements OnInit, OnDestroy {

  public changeName!: string;
  constructor(private addVideosElementService: AddVideosElementService) { }

  ngOnInit(): void {
    this.addVideosElementService.badge.next(true);
    this.addVideosElementService.changeName.subscribe((res) => {
      this.changeName = res
      console.log('res :>> ', res);
    })
    console.log('this.addVideosElementService.badge.next(true)');
  }

  ngOnDestroy(): void {
    this.addVideosElementService.badge.next(false);
    console.log('this.addVideosElementService.badge.next(false)');
  }

}
