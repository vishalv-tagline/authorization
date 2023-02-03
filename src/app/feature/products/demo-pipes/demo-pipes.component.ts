import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-pipes',
  templateUrl: './demo-pipes.component.html',
  styleUrls: ['./demo-pipes.component.scss']
})
export class DemoPipesComponent implements OnInit {

  public today: Date = new Date;
  public rupees: number = 4.122;
  public decimalValue: number = 5.123456789;
  public anyNum: number = 0.2;

  public faherenheit!: number;
  public celsius!: number;
  public search: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
