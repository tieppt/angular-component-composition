import { Directive } from '@angular/core';
import { ISelectOptions, SelectOptions, ISelectOption } from './models';
import { of } from 'rxjs';

@Directive({
  selector: '[appCalendarView]',
  providers: [
    {
      provide: SelectOptions,
      useExisting: CalendarViewDirective,
    }
  ]
})
export class CalendarViewDirective implements ISelectOptions {
  options$ = of<ISelectOption[]>([
    { key: 'day', label: 'Day' },
    { key: 'month', label: 'Month' },
    { key: 'year', label: 'Year' },
  ]);
  constructor() { }

}
