import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { AddVideosElementService } from '../../services/add-videos-element.service';

@Component({
  selector: 'app-off-from',
  templateUrl: './off-from.component.html',
  styleUrls: ['./off-from.component.scss']
})
export class OffFromComponent implements OnInit {

  public employes: any;
  constructor(private addVideosElementService: AddVideosElementService) { }

  ngOnInit(): void {

    // of method
    let ofElement = of('Vishal', 'Parag', 'Dharmik', 'Pratik', 'Jaydeep', 'Nirmit')

    ofElement.subscribe((response) => {
      // console.log('response :>> ', response);
      this.addVideosElementService.printElement(response, 'eleContainer')
    })

    let ofElementObj = of({ a: 'Vishal', b: 'Parag', c: 'Dharmik', d: 'Pratik', e: 'Jaydeep', f: 'Nirmit' })
    ofElementObj.subscribe((response) => {
      this.employes = response
      // console.log('response :>> ', response);
    })

    // from method
    let fromElementArray = from(['Vishal', 'Parag', 'Dharmik', 'Pratik', 'Jaydeep', 'Nirmit'])

    fromElementArray.subscribe((response) => {
      this.addVideosElementService.printElement(response, 'eleContainer2')
      console.log('responseArray :>> ', response);
    })

    // Promise to observable
    let promise = new Promise((resolve) => {
      resolve("Promise Resolve.....")
    })

    let convertObs = from(promise)
    convertObs.subscribe((response) => {
      this.addVideosElementService.printElement(response, 'eleContainer3')
      console.log('response :>> ', response);
    })
  }

}
