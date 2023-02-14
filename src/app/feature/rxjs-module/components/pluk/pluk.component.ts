import { Component, OnInit } from '@angular/core';
import { from, map, pluck, toArray } from 'rxjs';

@Component({
  selector: 'app-pluk',
  templateUrl: './pluk.component.html',
  styleUrls: ['./pluk.component.scss']
})
export class PlukComponent implements OnInit {

  students = [
    { id: 1, name: 'Vishal', address: { country: 'Ind', state: 'Gujarat' } },
    { id: 2, name: 'Parag', address: { country: 'Ind', state: 'Gujarat' } },
    { id: 3, name: 'Dharmik', address: { country: 'Ind', state: 'Gujarat' } },
    { id: 4, name: 'Ramesh', address: { country: 'Ind', state: 'Gujarat' } },
    { id: 5, name: 'Pawan', address: { country: 'Ind', state: 'Gujarat' } },
    { id: 6, name: 'Jaydip', address: { country: 'Ind', state: 'Gujarat' } },
    { id: 7, name: 'Ram', address: { country: 'Ind', state: 'Gujarat' } },
  ]

  studentsNames: any;
  studentsAddress: any

  constructor() { }

  ngOnInit(): void {
    from(this.students).pipe(
      // map((data) => data.name),
      pluck('name'),
      toArray()
    )
      .subscribe((response) => {
        this.studentsNames = response
        console.log('response :>> ', response);
      })

    from(this.students).pipe(
      // map((data) => data.name),
      pluck('address', 'country'),
      toArray()
    )
      .subscribe((response) => {
        this.studentsAddress = response
        console.log('response :>> ', response);
      })
  }

}


