import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { SelectComponent } from './select/select.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BooleanFilterDirective } from './boolean-filter.directive';
import { CalendarViewDirective } from './calendar-view.directive';



@NgModule({
  declarations: [SelectComponent, BooleanFilterDirective, CalendarViewDirective],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzSelectModule,
  ],
  exports: [SelectComponent, BooleanFilterDirective, CalendarViewDirective]
})
export class SelectModule { }
