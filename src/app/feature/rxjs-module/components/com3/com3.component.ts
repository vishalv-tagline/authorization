import { Component, OnInit } from '@angular/core';
import { AddVideosElementService } from '../../services/add-videos-element.service';

@Component({
  selector: 'app-com3',
  templateUrl: './com3.component.html',
  styleUrls: ['./com3.component.scss']
})
export class Com3Component implements OnInit {
  public changeName!: string;
  constructor(private addVideosElementService: AddVideosElementService) { }

  ngOnInit(): void {
    this.addVideosElementService.changeName.subscribe(res => this.changeName = res)
  }

  oninputChange(inputName: any) {
    this.addVideosElementService.changeName.next(inputName)
    console.log('inputName.value :>> ', inputName);
  }
}
