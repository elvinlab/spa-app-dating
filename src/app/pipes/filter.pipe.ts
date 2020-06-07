import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 3) return value;
    const resultCategories = [];
    for (const category of value) {
      if (category.name.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultCategories.push(category);
      };

      if (category.description.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultCategories.push(category);
      };
    };
    return resultCategories;
  }

}
