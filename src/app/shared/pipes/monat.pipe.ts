import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'monat'
})
export class MonatPipe implements PipeTransform {

  readonly dtf = new Intl.DateTimeFormat('de', {month: 'long'});

  transform(value: number, ...args: unknown[]): unknown {
    if (value > 0 && value < 13) {
      return this.dtf.format(new Date(Date.UTC(2020, value-1, 1)));
    }
    return value;
  }

}
