import { Component, OnDestroy, OnInit } from '@angular/core';
import { AddVideosElementService } from 'src/app/feature/rxjs-module/services/add-videos-element.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  badge: boolean = false;

  constructor(private addVideosElementService: AddVideosElementService) { }

  ngOnInit(): void {
    this.addVideosElementService.badge.subscribe((res) => {
      this.badge = res
    })
  }


}
