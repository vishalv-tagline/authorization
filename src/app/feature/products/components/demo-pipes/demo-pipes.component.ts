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
  public searchData: string = ''
  public text: string = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia minima tempore consequuntur reiciendis dicta asperiores necessitatibus assumenda. Sit quisquam, quod voluptatum eos nulla dolor ut iusto doloribus modi eius voluptatibus maxime veritatis deserunt enim obcaecati laudantium tenetur ipsam corrupti? At, id rem? Porro adipisci, ipsam rerum qui, similique explicabo et rem inventore voluptas aut nulla! Deserunt enim et ea cum error ipsum doloribus dolore, tenetur, adipisci soluta ut? Enim asperiores facilis aperiam eum odit tempore  eligendi placeat voluptatum repudiandae accusamus quisquam, commodi fugiat necessitatibus, soluta nostrum illum error dolores esse! Possimus aspernatur voluptates neque ipsum, ad maiores? Esse nemo nostrum possimus numquam  commodi dicta atque at aperiam dignissimos explicabo doloremque perspiciatis similique dolore, amet ratione  laudantium modi eos. Est esse reprehenderit vero veritatis in dolor accusantium debitis ab id, earum,  architecto, rerum dignissimos. Vitae nisi in minus perspiciatis necessitatibus, distinctio fugit optio  architecto incidunt accusantium iusto sunt non repellat eos quidem voluptate eius magni. Quam alias voluptate  autem illum, quo aliquam? Ipsum fugiat non ratione corporis id veritatis cupiditate voluptatum sint perspiciatis  ipsam dolorum, deleniti alias magnam, praesentium doloribus. Possimus iste reiciendis hic quisquam recusandae?  Laboriosam aliquam, culpa et sapiente cumque necessitatibus temporibus quis, reiciendis molestias omnis tempore  deleniti fuga?";

  public searchName!: string;
  public students: any = [
    {
      name: 'Vishal',
      gender: 'Male',
      course: 'BCA'
    },
    {
      name: 'Parag',
      gender: 'Male',
      course: 'BCA'
    },
    {
      name: 'Pratik',
      gender: 'Male',
      course: 'BCOM'
    },
    {
      name: 'Pankti',
      gender: 'Female',
      course: 'BA'
    },
    {
      name: 'Dharmik',
      gender: 'Male',
      course: 'BCOM'
    },
    {
      name: 'Frenk',
      gender: 'Male',
      course: 'BA'
    },
    {
      name: 'Vaibhav',
      gender: 'Male',
      course: 'MCA'
    },
    {
      name: 'Nisha',
      gender: 'Female',
      course: 'MCA'
    },
    {
      name: 'Zarana',
      gender: 'Female',
      course: 'BCOM'
    },
    {
      name: 'Jay',
      gender: 'Male',
      course: 'BBA'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
