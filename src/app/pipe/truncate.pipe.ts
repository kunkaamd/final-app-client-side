import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string,maxlength:number): string {
    return (value.length>=maxlength)?value.slice(0,maxlength)+'...':value;
  }

}
