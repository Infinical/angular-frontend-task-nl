import { Pipe, PipeTransform } from '@angular/core';
import { debounceTime } from 'rxjs/operators';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {


  transform(value, ...args: []): unknown {
    if (!args) {
      return value;
    }
  
    return value.filter((val: any) => {
      const rVal = (val.name.toLocaleLowerCase().includes(args)) 
      debounceTime(500)
      return rVal;
    });
  }

}
