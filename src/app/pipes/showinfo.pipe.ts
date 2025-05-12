import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showinfo'
})
export class ShowinfoPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    return value< 15?'its an Easy Recipe':'Take Time'
  }

}
