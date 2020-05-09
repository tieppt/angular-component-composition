import { Component, OnInit, Optional, Inject, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SelectOptions, ISelectOptions } from '../models';
import { FormControl } from '@angular/forms';
import { NzSelectModeType } from 'ng-zorro-antd/select/public-api';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  options$: Observable<{ key: string; label: string }[]> = of([]);
  @Input()
  placeHolder = '';

  @Input()
  control = new FormControl(null);

  @Input()
  selectMode?: NzSelectModeType = 'default';

  constructor(
    @Optional() @Inject(SelectOptions) directive: ISelectOptions,
  ) {
    this.options$ = directive?.options$;
  }

  ngOnInit(): void {
  }

}
