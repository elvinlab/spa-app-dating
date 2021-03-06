import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 3) return value;
    const resultList = [];
    for (const array of value) {
      if(array.name){
        if (array.name.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
          resultList.push(array);
        }
      }
     
      if(array.description){
        if (array.description.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
          resultList.push(array);
        }
      }
      if(array.coupon){
        if (array.coupon.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
          resultList.push(array);
        }
      }
     
      if(array.name_owner){
        if (array.name_owner.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
          resultList.push(array);
        }
      }

      if(array.address){
        if (array.address.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
          resultList.push(array);
        }
      }
      if(array.tell){
        if (array.tell.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
          resultList.push(array);
        }
      }
        
      if(array.cell){
        if (array.cell.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
          resultList.push(array);
        }
      }

      if(array.name_commerce){
        if (array.name_commerce.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
          resultList.push(array);
        }
      }
      if(array.expiry){
        if (array.expiry.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
          resultList.push(array);
        }
      }
    
    }
    return resultList;
  }

}
