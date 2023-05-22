import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { AddVideosElementService } from '../../services/add-videos-element.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit, AfterViewInit {

  @ViewChild('btnAdd') btnAdd!: ElementRef;

  constructor(
    private addVideosElementService: AddVideosElementService
  ) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    let count = 1;
    fromEvent(this.btnAdd.nativeElement, 'click').subscribe((res) => {
      let countValue = 'Video : ' + count++;
      this.addVideosElementService.printElement(countValue, 'eleContainer');
      this.addVideosElementService.printElement(countValue, 'eleContainer2');
    })
  }
}
