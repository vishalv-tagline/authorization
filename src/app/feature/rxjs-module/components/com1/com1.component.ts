import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AddVideosElementService } from '../../services/add-videos-element.service';

@Component({
  selector: 'app-com1',
  templateUrl: './com1.component.html',
  styleUrls: ['./com1.component.scss']
})
export class Com1Component implements OnInit {
  // @ViewChild('inputName') inputName!: ElementRef;
  public changeName!: string;
  constructor(private addVideosElementService: AddVideosElementService) { }

  ngOnInit(): void {
    this.addVideosElementService.changeName.subscribe((res) => {
      this.changeName = res
      console.log('res :>> ', res);
    })
  }

  onChange(inputName: any) {
    console.log('inputName :>> ', inputName);
    this.addVideosElementService.changeName.next(inputName);
  }

}
