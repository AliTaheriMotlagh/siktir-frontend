import { Pipe, PipeTransform } from '@angular/core';
import * as dayjs from 'dayjs';
import * as relativeTime from 'dayjs/plugin/relativeTime';
@Pipe({
  name: 'durationDate',
})
export class DurationDatePipe implements PipeTransform {
  constructor() {
    dayjs.extend(relativeTime);
  }

  transform(value: string | Date, ...args: unknown[]): unknown {
    return dayjs(value).fromNow();
  }
}
