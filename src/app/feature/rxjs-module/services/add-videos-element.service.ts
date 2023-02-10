import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddVideosElementService {

  constructor() { }

  printElement(value: any, eleContainerId: any) {
    let element = document.createElement('li')
    element.innerText = value

    document.getElementById(eleContainerId)?.appendChild(element)
  }
}
