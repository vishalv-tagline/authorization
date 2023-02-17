import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { combineLatestWith } from 'rxjs';
import { AsyncOperatorComponent } from './components/async-operator/async-operator.component';
import { CombineOperatorComponent } from './components/combine-operator/combine-operator.component';
import { ConcatMapComponent } from './components/concat-map/concat-map.component';
import { ConcatMergeComponent } from './components/concat-merge/concat-merge.component';
import { CustomeObservableComponent } from './components/custome-observable/custome-observable.component';
import { DebounceDistinctUntilChangedComponent } from './components/debounce-distinct-until-changed/debounce-distinct-until-changed.component';
import { ExhaustMapComponent } from './components/exhaust-map/exhaust-map.component';
import { FilterComponent } from './components/filter/filter.component';
import { FromEventComponent } from './components/from-event/from-event.component';
import { IntervalAndTimerComponent } from './components/interval-and-timer/interval-and-timer.component';
import { MapOperatorComponent } from './components/map-operator/map-operator.component';
import { MergeMapComponent } from './components/merge-map/merge-map.component';
import { OffFromComponent } from './components/off-from/off-from.component';
import { PerOperatorComponent } from './components/per-operator/per-operator.component';
import { PlukComponent } from './components/pluk/pluk.component';
import { PromiseExpComponent } from './components/promise-exp/promise-exp.component';
import { ReplayOperatorComponent } from './components/replay-operator/replay-operator.component';
import { RetryOperatorComponent } from './components/retry-operator/retry-operator.component';
import { RxjsOperatorComponent } from './components/rxjs-operator/rxjs-operator.component';
import { ShareReplayComponent } from './components/share-replay/share-replay.component';
import { SubjectBehaviorSubComponent } from './components/subject-behavior-sub/subject-behavior-sub.component';
import { SwitchMapComponent } from './components/switch-map/switch-map.component';
import { TakeOperatorComponent } from './components/take-operator/take-operator.component';
import { TapOperatorComponent } from './components/tap-operator/tap-operator.component';
import { ToArrayComponent } from './components/to-array/to-array.component';

const routes: Routes = [
  {
    path: 'promise',
    component: PromiseExpComponent
  },
  {
    path: 'rxjsOperator',
    component: RxjsOperatorComponent,
    children: [
      { path: '', component: PerOperatorComponent },
      { path: 'fromEvent', component: FromEventComponent },
      { path: 'intervalAndTimer', component: IntervalAndTimerComponent },
      { path: 'off-From', component: OffFromComponent },
      { path: 'toArray', component: ToArrayComponent },
      { path: 'customeObs', component: CustomeObservableComponent },
      { path: 'mapOperator', component: MapOperatorComponent },
      { path: 'pluck', component: PlukComponent },
      { path: 'filter', component: FilterComponent },
      { path: 'tap', component: TapOperatorComponent },
      { path: 'take', component: TakeOperatorComponent },
      { path: 'retry', component: RetryOperatorComponent },
      { path: 'debouncedistinctuntilchanged', component: DebounceDistinctUntilChangedComponent },
      { path: 'replayope', component: ReplayOperatorComponent },
      { path: 'asyncOpe', component: AsyncOperatorComponent },
      { path: 'concatAndmerege', component: ConcatMergeComponent },
      { path: 'meregeMap', component: MergeMapComponent },
      { path: 'concatMap', component: ConcatMapComponent },
      { path: 'subject', component: SubjectBehaviorSubComponent },
      { path: 'SwitchMap', component: SwitchMapComponent },
      { path: 'exhaustmap', component: ExhaustMapComponent },
      { path: 'ShareReplay', component: ShareReplayComponent },
      { path: 'combine', component: CombineOperatorComponent },
    ]
  },
  {
    path: '**',
    redirectTo: 'promise'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsModuleRoutingModule { }
