import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { DemoPipesComponent } from './demo-pipes/demo-pipes.component';
import { ProductsResolver } from './resolver/products.resolver';

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent,
    resolve: {
      productList: ProductsResolver
    }
  },
  {
    path: 'pipe',
    component: DemoPipesComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
