import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, map, take, takeLast, takeUntil } from 'rxjs';
import { AddVideosElementService } from '../../services/add-videos-element.service';

@Component({
  selector: 'app-take-operator',
  templateUrl: './take-operator.component.html',
  styleUrls: ['./take-operator.component.scss']
})
export class TakeOperatorComponent implements OnInit {

  students = ['Vishal', 'Parag', 'Jaydip', 'Dharmik', 'Rohit', 'Virat']
  constructor(private addVideosElementService: AddVideosElementService) { }

  ngOnInit(): void {
    this.takeOpe();
    this.takeLastOpe();
    this.takeUntilOpe();
  }

  takeOpe() {
    const data = from(this.students)

    data.
      pipe(
        take(3)
      ).
      subscribe((res) => {
        this.addVideosElementService.printElement(res, 'containerStudents')
        console.log('res :>> ', res);
      })
  }

  takeLastOpe() {
    const data = from(this.students)
    data.
      pipe(
        takeLast(3)
      ).
      subscribe((res) => {
        this.addVideosElementService.printElement(res, 'containerStudents2')
        console.log('res :>> ', res);
      })
  }

  takeUntilOpe() {
    // const data = from(this.students)
    const data = interval(1000)
    const condition = fromEvent(document, 'click')
    data.
      pipe(
        map((data => 'Num ' + data)),
        takeUntil(condition)
      ).
      subscribe((res) => {
        this.addVideosElementService.printElement(res, 'containerStudents3')
        console.log('res :>> ', res);
      })
  }


}
