import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProduct'
})
export class FilterProductPipe implements PipeTransform {

  transform(value: any, filterString: string, propName : string): any {
    if(value.length === 0 || filterString==='' )
    {
      return value;
    }
    const resultArray=[];

    for (const item in value)
    {
      if(value[item].productAvailable.toUpperCase().includes(filterString.toUpperCase()))
      {
        resultArray.push(value[item]);
      }
    }
    return resultArray;
  }

}
