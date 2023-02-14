import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AddVideosElementService } from '../../services/add-videos-element.service';

@Component({
  selector: 'app-custome-observable',
  templateUrl: './custome-observable.component.html',
  styleUrls: ['./custome-observable.component.scss']
})
export class CustomeObservableComponent implements OnInit, OnDestroy {

  techStatus: any;
  techStatus2: any;
  subscriptionPro!: Subscription;
  technology: any = ['Angular', 'React', 'Js', 'Ts']
  names: any = ['Vishal', 'Parag', 'Jaydip', 'Ram', 'Vishal', 'Parag', 'Jaydip', 'Ram']
  perticularName: any;
  constructor(private addVideosElementService: AddVideosElementService) { }

  ngOnInit(): void {
    this.setTimeoutExp();
    this.setIntervalExp();
    this.randomExp();
  }

  setTimeoutExp() {
    const obs1 = Observable.create((observer: any) => {
      setTimeout(() => {
        observer.next("Angular")
      }, 1000)

      setTimeout(() => {
        observer.next("React")
        observer.error()

      }, 2000)

      setTimeout(() => {
        observer.next("Html & Css")
        // observer.complete()
      }, 3000)

      setTimeout(() => {
        observer.next("Javascript")
        observer.complete()
      }, 4000)
    })

    obs1.subscribe((res: any) => {
      this.addVideosElementService.printElement(res, 'container1')
    },
      (error: any) => {
        this.techStatus = 'error'
      },
      () => {
        this.techStatus = "completed"
      }
    )
  }

  setIntervalExp() {
    const obs2 = Observable.create((observer: any) => {
      let count = 0;
      setInterval(() => {
        observer.next(this.technology[count])
        count++;
        if (count > 3) {
          observer.complete()
        }
      }, 1000)
    })

    this.subscriptionPro = obs2.subscribe((response: any) => {
      this.addVideosElementService.printElement(response, 'container2')
      // console.log('response :>> ', response);
    }, (error: any) => {
      this.techStatus2 = 'error'
    },
      () => {
        this.techStatus2 = "completed"
      }
    )
  }


  randomExp() {
    const obs3 = Observable.create((observer: any) => {
      let count = 0;
      setInterval(() => {
        observer.next(this.names[count])
        count++;
        if (count > 8) {
          observer.complete()
        }
      }, 1000)
    })

    obs3.subscribe((response: any) => {
      // console.log('response :>> ', response);
      this.perticularName = response
    })
  }



  ngOnDestroy() {
    this.subscriptionPro.unsubscribe()
  }
}
