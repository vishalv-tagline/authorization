import { Component, OnInit } from '@angular/core';
import { from, interval, of, Subscription, take, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent implements OnInit {

  public dataSubscription!: Subscription

  public listOfNames: any;
  public students = [
    { rno: 101, name: "Vishal", course: "BCA" },
    { rno: 102, name: "Parag", course: "BA" },
    { rno: 103, name: "Het", course: "BA" },
    { rno: 104, name: "Dharmik", course: "BBA" },
    { rno: 105, name: "Raj", course: "BCOM" }
  ]


  constructor() { }

  ngOnInit(): void {
    const data = interval(1000);
    this.dataSubscription = data.pipe(take(5), toArray()).subscribe((response) => {
      console.log('response :>> ', response);
    })

    const data2 = from(this.students)
    data2.pipe(toArray()).
      subscribe((response) => {
        console.log('response :>> ', response);
      })

    const data3 = of('Vishal', 'Parag', 'Dharmik', 'Jaydip', 'Pratik')

    data3.pipe(toArray()).
      subscribe((response) => {
        this.listOfNames = response
        console.log('this.listOfNames :>> ', this.listOfNames);
      })
  }

}
