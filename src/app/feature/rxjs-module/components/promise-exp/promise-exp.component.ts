import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise-exp',
  templateUrl: './promise-exp.component.html',
  styleUrls: ['./promise-exp.component.scss']
})
export class PromiseExpComponent implements OnInit {

  public dellAvailable(): boolean {
    return true;
  }

  public hpAvailable(): boolean {
    return false;
  }

  public result: any;

  public del = {
    name: 'del',
    price: 10000
  }
  constructor() { }

  ngOnInit(): void {

    let promisePurchase = new Promise((resolve, reject) => {
      if (this.dellAvailable()) {
        // return resolve('Dell is available')
        let abc = resolve(JSON.stringify(this.del))
        return abc

      }
      else if (this.hpAvailable()) {
        return resolve('Hp is availble')
      }
      else {
        return reject('Laptop not available')
      }
    });
    promisePurchase.then((response) => {
      this.result = response
    }).catch((response) => {
      this.result = response
    })
  }
}
