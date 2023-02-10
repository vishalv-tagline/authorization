import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'product',
    loadChildren: () => import('src/app/feature/products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'rxjs',
    loadChildren: () => import('src/app/feature/rxjs-module/rxjs-module.module').then(m => m.RxjsModuleModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
