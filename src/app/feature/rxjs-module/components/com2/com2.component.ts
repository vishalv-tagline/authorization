import { Component, OnInit } from '@angular/core';
import { AddVideosElementService } from '../../services/add-videos-element.service';

@Component({
  selector: 'app-com2',
  templateUrl: './com2.component.html',
  styleUrls: ['./com2.component.scss']
})
export class Com2Component implements OnInit {
  public changeName!: string;
  constructor(private addVideosElementService: AddVideosElementService) { }

  ngOnInit(): void {
    this.addVideosElementService.changeName.subscribe((res) => {
      this.changeName = res
    })
  }

  onChange(changeName: any) {
    this.addVideosElementService.changeName.next(changeName)
    console.log('changeName :>> ', changeName);
  }

}
