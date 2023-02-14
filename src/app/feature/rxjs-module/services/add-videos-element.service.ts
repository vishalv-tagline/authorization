import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AsyncSubject, ReplaySubject } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AddVideosElementService {

  videoEmmit = new ReplaySubject<string>(2);
  asyncvideoEmmit = new AsyncSubject();

  constructor(private http: HttpClient) { }

  printElement(value: any, eleContainerId: any) {
    let element = document.createElement('li')
    element.innerText = value
    document.getElementById(eleContainerId)?.appendChild(element)
  }

  fetchData() {
    return this.http.get(environment.productApi + `users`)
  }


}
