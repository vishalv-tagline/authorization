import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { DemoPipesComponent } from './components/demo-pipes/demo-pipes.component';
import { CustomePipe } from './pipes/custome.pipe';
import { FormsModule } from '@angular/forms';
import { MaxLengthPipe } from './pipes/max-length.pipe';
import { FilterPipe } from './pipes/filter.pipe';


@NgModule({
  declarations: [
    ProductListComponent,
    DemoPipesComponent,
    CustomePipe,
    MaxLengthPipe,
    FilterPipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule
  ],
  exports: [
    CustomePipe
  ]
})
export class ProductsModule { }
