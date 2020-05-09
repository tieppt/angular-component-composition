import { Directive } from '@angular/core';
import { ISelectOptions, ISelectOption, SelectOptions } from './models';
import { of } from 'rxjs';

@Directive({
  selector: '[appBooleanFilter]',
  providers: [
    {
      provide: SelectOptions,
      useExisting: BooleanFilterDirective,
    }
  ]
})
export class BooleanFilterDirective implements ISelectOptions {
  options$ = of<ISelectOption[]>([
    { key: true, label: 'Yes' },
    { key: false, label: 'No' },
  ]);
  constructor() { }

}
