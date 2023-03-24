import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchTerms: any): any {
    if (!searchTerms) {
      return value;
    }
    // else {
    //   let replaceValue = new RegExp(searchTerms, 'igm');
    //   value = value.replace(replaceValue, `<b><mark>$&</mark></b>`);
    // }
    else {
      return value.filter((data: any) => {
        // console.log('data :>> ', data);
        return Object.keys(data).some((key) => {
          return String(data[key]).toLocaleLowerCase().includes(searchTerms.toLocaleLowerCase());
        })
      }).map((data: any) => {
        return {
          name: data.name.replace(new RegExp(searchTerms, 'gim'), `<b>$&</b>`),
          gender: data.gender.replace(new RegExp(searchTerms, 'gim'), `<b>$&</b>`),
          course: data.course.replace(new RegExp(searchTerms, 'gim'), `<b>$&</b>`),
        };
      });
    }
  }
}
    //     else {
    //       return value.filter((data: any) => {
    //         let filterValue = data.name.toLowerCase().indexOf(searchTerms.toLowerCase()) > -1
    //         console.log('filterValue :>> ', filterValue);
    //         return filterValue;
    //       }).map((data: any) => {
    //         return {
    //           name: data.name.replace(new RegExp(searchTerms, 'gim'), `<b>${searchTerms}</b>`),
    //           gender: data.gender,
    //           course: data.course
    //         };
    //       });
    //     }
    //   }
    // }
//     else {
//   return value.filter((data: any) => {
//     // console.log('data :>> ', data);
//     return Object.keys(data).some((key) => {
//       return String(data[key]).toLocaleLowerCase().includes(searchTerms.toLocaleLowerCase());
//     })
//   }).map((data: any) => {
//     return {
//       name: data.name.replace(new RegExp(searchTerms, 'gim'), `<b>$&</b>`),
//       gender: data.gender.replace(new RegExp(searchTerms, 'gim'), `<b>$&</b>`),
//       course: data.course.replace(new RegExp(searchTerms, 'gim'), `<b>$&</b>`),
//     };
//   });
// }
//   }
// }
