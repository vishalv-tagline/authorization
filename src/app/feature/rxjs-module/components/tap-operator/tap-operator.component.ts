import { Component, OnInit } from '@angular/core';
import { interval, map, Subscription, tap } from 'rxjs';
import { AddVideosElementService } from '../../services/add-videos-element.service';

@Component({
  selector: 'app-tap-operator',
  templateUrl: './tap-operator.component.html',
  styleUrls: ['./tap-operator.component.scss']
})
export class TapOperatorComponent implements OnInit {

  obsSubscription!: Subscription
  obsSubscription2!: Subscription
  myColor: any;
  constructor(private addVideosElementService: AddVideosElementService) { }

  ngOnInit(): void {
    this.getData();
    this.colorChange();
  }

  getData() {
    const studentsName = ['Vishal', 'Parag', 'Dharmik', 'Jaydip', 'Pratik', 'Gangu', 'Ramesh']
    const source = interval(1000)

    this.obsSubscription = source.pipe(
      tap((response) => {
        if (response == 5) {
          this.obsSubscription.unsubscribe()
        }
      }),
      map((data) => studentsName[data])
    ).
      subscribe((response) => {
        this.addVideosElementService.printElement(response, 'eleContainer2')
        console.log('response :>> ', response);
      })
  }

  colorChange() {
    const colorNames = ['Red', 'Green', 'Blue', 'coral', 'cyan', 'Pink'];
    const source = interval(1000)

    this.obsSubscription2 = source.pipe(
      tap((response) => {
        this.myColor = colorNames[response]
        if (response == 6) {
          this.obsSubscription2.unsubscribe()
        }
      }),
      map((data) => colorNames[data])
    ).
      subscribe((response) => {
        this.addVideosElementService.printElement(response, 'eleContainer')
        console.log('response :>> ', response);
      })
  }

}
