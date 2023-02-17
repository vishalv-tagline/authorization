import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Videoslist } from '../interface/common';

@Injectable({
  providedIn: 'root'
})

export class AddVideosElementService {

  badge = new Subject<boolean>();
  changeName = new BehaviorSubject<string>('Vishal')

  public videoEmmit = new ReplaySubject<string>(2);
  public asyncvideoEmmit = new AsyncSubject();

  constructor(private http: HttpClient) { }

  printElement(value: any, eleContainerId: any) {
    let element = document.createElement('li')
    element.innerText = value
    document.getElementById(eleContainerId)?.appendChild(element)
  }

  fetchData() {
    return this.http.get(environment.productApi + `users`)
  }

  fetchUxData(search: any): Observable<Videoslist> {
    return this.http.get<Videoslist>(environment.uxTrenzApi + '?q=' + search)
  }

  fetchRequest(): Observable<any> {
    return this.http.get(environment.productApi + `products`)
  }

  fetchProduct() {
    return this.http.get(environment.productApi + `products`)
  }
}
