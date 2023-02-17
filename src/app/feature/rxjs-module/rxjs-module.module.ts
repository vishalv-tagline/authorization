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
import { ConcatMergeComponent } from './components/concat-merge/concat-merge.component';
import { MergeMapComponent } from './components/merge-map/merge-map.component';
import { ConcatMapComponent } from './components/concat-map/concat-map.component';
import { SwitchMapComponent } from './components/switch-map/switch-map.component';
import { FormsModule } from '@angular/forms';
import { ExhaustMapComponent } from './components/exhaust-map/exhaust-map.component';
import { ShareReplayComponent } from './components/share-replay/share-replay.component';
import { CombineOperatorComponent } from './components/combine-operator/combine-operator.component';
import { SubjectBehaviorSubComponent } from './components/subject-behavior-sub/subject-behavior-sub.component';
import { Com1Component } from './components/com1/com1.component';
import { Com2Component } from './components/com2/com2.component';
import { Com3Component } from './components/com3/com3.component';


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
    AsyncOperatorComponent,
    ConcatMergeComponent,
    MergeMapComponent,
    ConcatMapComponent,
    SwitchMapComponent,
    ExhaustMapComponent,
    ShareReplayComponent,
    CombineOperatorComponent,
    SubjectBehaviorSubComponent,
    Com1Component,
    Com2Component,
    Com3Component
  ],
  imports: [
    CommonModule,
    RxjsModuleRoutingModule,
    FormsModule
  ]
})
export class RxjsModuleModule { }
