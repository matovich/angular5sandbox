import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, limit: number): string {

    if(limit == undefined || value.length < limit)
      return value;

    return value.substring(0, limit) + "...";
  }
}
