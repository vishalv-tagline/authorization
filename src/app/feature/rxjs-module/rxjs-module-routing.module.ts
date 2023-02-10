import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FromEventComponent } from './components/from-event/from-event.component';
import { IntervalAndTimerComponent } from './components/interval-and-timer/interval-and-timer.component';
import { OffFromComponent } from './components/off-from/off-from.component';
import { PerOperatorComponent } from './components/per-operator/per-operator.component';
import { PromiseExpComponent } from './components/promise-exp/promise-exp.component';
import { RxjsOperatorComponent } from './components/rxjs-operator/rxjs-operator.component';
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
