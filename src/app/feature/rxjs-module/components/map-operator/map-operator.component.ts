import { Component, OnInit } from '@angular/core';
import { from, interval, map, Observable, Subscription } from 'rxjs';
import { AddVideosElementService } from '../../services/add-videos-element.service';

@Component({
  selector: 'app-map-operator',
  templateUrl: './map-operator.component.html',
  styleUrls: ['./map-operator.component.scss']
})
export class MapOperatorComponent implements OnInit {

  subScription!: Subscription
  msg2: any
  constructor(private addVideosElementService: AddVideosElementService) { }

  ngOnInit(): void {

    const obs1 = interval(1000)

    this.subScription = obs1.
      pipe(
        map((data) => {
          return data * 10;
        })
      ).
      subscribe((response) => {
        this.msg2 = response
        console.log('response :>> ', response);
      })

    setTimeout(() => {
      this.subScription.unsubscribe()
    }, 10000)


    const students = from([
      { id: 1, name: 'Vishal' },
      { id: 2, name: 'Parag' },
      { id: 3, name: 'Dharmik' },
      { id: 4, name: 'Ramesh' },
      { id: 5, name: 'Pawan' },
      { id: 6, name: 'Jaydip' },
      { id: 7, name: 'Ram' },
    ])

    students.
      pipe(
        map((data) => {
          return data.name
        })
      ).
      subscribe((response) => {
        this.addVideosElementService.printElement(response, 'eleContainer')
        console.log('response :>> ', response);
      })
  }

}
