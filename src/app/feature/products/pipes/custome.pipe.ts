import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custome'
})
export class CustomePipe implements PipeTransform {

  transform(value: number, unit: string): any {
    if (value && !isNaN(value)) {
      if (unit === 'C') {
        let temp: any = (value - 32) / 1.8;
        return temp.toFixed(2);
      }
      else if (unit === 'F') {
        var temperature = (value * 1.8) + 32
        return temperature.toFixed(2);
      }
    }
    return;
  }

}
