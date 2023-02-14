import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-debounce-distinct-until-changed',
  templateUrl: './debounce-distinct-until-changed.component.html',
  styleUrls: ['./debounce-distinct-until-changed.component.scss']
})
export class DebounceDistinctUntilChangedComponent implements OnInit, AfterViewInit {

  @ViewChild('inputBox') inputBox!: ElementRef
  public reqData = null;

  @ViewChild('inputBox2') inputBox2!: ElementRef
  public reqData2 = null

  constructor() { }

  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    this.sendData();
    this.sendData2();
  }

  sendData() {
    let searchData = fromEvent<any>(this.inputBox.nativeElement, 'keyup').pipe(
      map((event) => event.target.value),
      debounceTime(500)
    )

    searchData.subscribe((res) => {
      this.reqData = res
      setTimeout(() => {
        this.reqData = null
      }, 1500)
      console.log('res :>> ', res);
    })
  }

  sendData2() {
    let searchData2 = fromEvent<any>(this.inputBox2.nativeElement, 'keyup').pipe(
      map((event) => event.target.value),
      distinctUntilChanged()
    )
    searchData2.subscribe((res) => {
      this.reqData2 = res
      setTimeout(() => {
        this.reqData2 = null
      }, 1500)
      console.log('res :>> ', res);
    })
  }

}
