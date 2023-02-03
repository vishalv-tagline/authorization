import { HtmlTagDefinition } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maxLength'
})
export class MaxLengthPipe implements PipeTransform {

  transform(value: string, strLengthSearch: number): string {
    if (value.length > strLengthSearch) {
      return value.slice(0, strLengthSearch) + '...';
    }
    return value;
  }
}
