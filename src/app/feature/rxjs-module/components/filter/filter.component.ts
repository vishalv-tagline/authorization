import { Component, OnInit } from '@angular/core';
import { filter, from, toArray } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  students = [
    { id: 1, name: 'Vishal', gender: 'Male', },
    { id: 2, name: 'Parag', gender: 'Male', },
    { id: 3, name: 'Dharmik', gender: 'Male', },
    { id: 4, name: 'Ramesh', gender: 'Male', },
    { id: 5, name: 'Pankti', gender: 'Female', },
    { id: 6, name: 'Jaydip', gender: 'Male', },
    { id: 7, name: 'Ram', gender: 'Male', },
    { id: 8, name: 'Sita', gender: 'Female', },
    { id: 9, name: 'Sneha', gender: 'Female', },
    { id: 10, name: 'Pooja', gender: 'Female', },
  ]

  studentsData: any;

  constructor() { }

  ngOnInit(): void {
    this.filterDatas();
    this.filterDataGen();
  }

  filterDatas() {
    const filterData = from(this.students).pipe(
      filter(member => member.name.length <= 4),
      toArray()
    )
      .subscribe((response) => {
        this.studentsData = response
        console.log('response :>> ', response);
      })
  }


  filterDataGen() {
    const filterData = from(this.students).pipe(
      filter(member => member.gender === 'Male'),
      toArray()
    )
      .subscribe((response) => {
        this.studentsData = response
        console.log('response :>> ', response);
      })
  }
}
