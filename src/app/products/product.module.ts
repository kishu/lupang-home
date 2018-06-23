import { NgModule } from '@angular/core';
import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    ProductRoutingModule
  ]
})
export class ProductModule { }
