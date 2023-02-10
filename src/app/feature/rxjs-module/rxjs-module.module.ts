import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsModuleRoutingModule } from './rxjs-module-routing.module';
import { PromiseExpComponent } from './components/promise-exp/promise-exp.component';
import { RxjsOperatorComponent } from './components/rxjs-operator/rxjs-operator.component';
import { FromEventComponent } from './components/from-event/from-event.component';
import { PerOperatorComponent } from './components/per-operator/per-operator.component';
import { IntervalAndTimerComponent } from './components/interval-and-timer/interval-and-timer.component';
import { OffFromComponent } from './components/off-from/off-from.component';
import { ToArrayComponent } from './components/to-array/to-array.component';


@NgModule({
  declarations: [
    PromiseExpComponent,
    RxjsOperatorComponent,
    FromEventComponent,
    PerOperatorComponent,
    IntervalAndTimerComponent,
    OffFromComponent,
    ToArrayComponent
  ],
  imports: [
    CommonModule,
    RxjsModuleRoutingModule
  ]
})
export class RxjsModuleModule { }
