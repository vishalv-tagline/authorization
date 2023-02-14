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
import { CustomeObservableComponent } from './components/custome-observable/custome-observable.component';
import { MapOperatorComponent } from './components/map-operator/map-operator.component';
import { PlukComponent } from './components/pluk/pluk.component';
import { FilterComponent } from './components/filter/filter.component';
import { TapOperatorComponent } from './components/tap-operator/tap-operator.component';
import { TakeOperatorComponent } from './components/take-operator/take-operator.component';
import { RetryOperatorComponent } from './components/retry-operator/retry-operator.component';
import { DebounceDistinctUntilChangedComponent } from './components/debounce-distinct-until-changed/debounce-distinct-until-changed.component';
import { ReplayOperatorComponent } from './components/replay-operator/replay-operator.component';
import { AsyncOperatorComponent } from './components/async-operator/async-operator.component';


@NgModule({
  declarations: [
    PromiseExpComponent,
    RxjsOperatorComponent,
    FromEventComponent,
    PerOperatorComponent,
    IntervalAndTimerComponent,
    OffFromComponent,
    ToArrayComponent,
    CustomeObservableComponent,
    MapOperatorComponent,
    PlukComponent,
    FilterComponent,
    TapOperatorComponent,
    TakeOperatorComponent,
    RetryOperatorComponent,
    DebounceDistinctUntilChangedComponent,
    ReplayOperatorComponent,
    AsyncOperatorComponent
  ],
  imports: [
    CommonModule,
    RxjsModuleRoutingModule
  ]
})
export class RxjsModuleModule { }
