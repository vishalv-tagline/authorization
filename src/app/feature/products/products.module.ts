import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { DemoPipesComponent } from './demo-pipes/demo-pipes.component';
import { CustomePipe } from './pipes/custome.pipe';
import { FormsModule } from '@angular/forms';
import { MaxLengthPipe } from './pipes/max-length.pipe';


@NgModule({
  declarations: [
    ProductListComponent,
    DemoPipesComponent,
    CustomePipe,
    MaxLengthPipe
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
